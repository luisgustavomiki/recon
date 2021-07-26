import parse from 'csv-parse';
import formidable from 'formidable';
import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import { Entry } from '../../interfaces/entry';
import { ReconReport } from '../../interfaces/reconReport';
import { match } from '../../logic/match';
import { summarize } from '../../logic/summarize';
import middlewares from '../../middlewares';

const handler = nextConnect();
handler.use(middlewares);

async function handleFile(file: formidable.File): Promise<Array<Record<string, string>>> {
	return new Promise((resolve, reject) => {
		parse(fs.readFileSync(file.path), {
			columns: true,
			ignore_last_delimiters: true,
		}, function(err, output){
			if (err) {
				reject(err);
			} else {
				resolve(output);
			}
		})
	});
}

function transformEntries(data: Array<Record<string, string>>): Array<Entry> {
	return data.map(entry => (
		{ 
			date: entry['TransactionDate'], 
			reference: removeTrailingComma(entry['WalletReference']), 
			amount: entry['TransactionAmount'],
		}
	));
}

function removeTrailingComma(text: string): string {
	return text.endsWith(',') ? text.substr(0, text.length - 1) : text;
}

handler.post(async(req: NextApiRequest & { files: formidable.Files }, res: NextApiResponse<ReconReport | { error: string }>) => {
	try {
		const files = req.files;

    const leftFile = files['leftFile'] as formidable.File;
		const rightFile = files['rightFile'] as formidable.File;

		const leftRecords = await handleFile(leftFile);
		const rightRecords = await handleFile(rightFile);

		const leftEntries = transformEntries(leftRecords);
		const rightEntries = transformEntries(rightRecords);

		const summary = summarize({ left: leftEntries, right: rightEntries });
		const details = match({ left: leftEntries, right: rightEntries });

		const report = {
			left: {
				name: leftFile.name as string,
				entries: leftEntries,
				summary: summary.left,
				details: details.left,
			},
			right: {
				name: rightFile.name as string,
				entries: rightEntries,
				summary: summary.right,
				details: details.right,
			}
		}
		
		// do stuff with files and body
		res.status(200).json(report);
	} catch (err) {
		res.status(403).json({error: err.message});
	}
});

export const config = {
  api: {
    bodyParser: false,
  },
}

export default handler;
