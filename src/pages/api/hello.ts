import formidable from 'formidable';
import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import middlewares from '../../middlewares';

const handler = nextConnect();
handler.use(middlewares);

handler.post(async(req: NextApiRequest & { files: formidable.File[] }, res: NextApiResponse) => {
	try {
		const files = req.files;

    console.log(Object.values(files).map(f => f.name));

		// do stuff with files and body
		res.status(200).json({});
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
