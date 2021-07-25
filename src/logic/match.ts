import { Entry } from "../interfaces/entry";
import { ReconSummary } from "../interfaces/reconSummary";
import { aggregateMatchingRecords } from "./aggregators/matchingRecords";
import { aggregateTotalRecords } from "./aggregators/totalRecords";
import { aggregateUnmatchedRecords } from "./aggregators/unmatchedRecords";

interface Input {
  left: Array<Entry>,
  right: Array<Entry>
}

interface Output {
  left: ReconSummary,
  right: ReconSummary
}

export function match({ left, right }: Input): Output {
  return {
    left: {
      ...aggregateTotalRecords({ source: left }),
      ...aggregateMatchingRecords({ source: left, target: right }),
      ...aggregateUnmatchedRecords({ source: left, target: right }),
    },
    right: {
      ...aggregateTotalRecords({ source: right }),
      ...aggregateMatchingRecords({ source: right, target: left }),
      ...aggregateUnmatchedRecords({ source: right, target: left }),
    }
  }
}
