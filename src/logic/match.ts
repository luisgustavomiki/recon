import { Entry } from "../interfaces/entry";
import { ReconSummary } from "../interfaces/reconSummary";
import { aggregateMatchingRecords } from "./aggregators/matchingRecords";
import { aggregateTotalRecords } from "./aggregators/totalRecords";
import { aggregateUnmatchedRecords } from "./aggregators/unmatchedRecords";

interface Input {
  file1: Array<Entry>,
  file2: Array<Entry>
}

interface Output {
  file1: ReconSummary,
  file2: ReconSummary
}

export function match({ file1, file2 }: Input): Output {
  return {
    file1: {
      ...aggregateTotalRecords({ source: file1 }),
      ...aggregateMatchingRecords({ source: file1, target: file2 }),
      ...aggregateUnmatchedRecords({ source: file1, target: file2 }),
    },
    file2: {
      ...aggregateTotalRecords({ source: file2 }),
      ...aggregateMatchingRecords({ source: file2, target: file1 }),
      ...aggregateUnmatchedRecords({ source: file2, target: file1 }),
    }
  }
}
