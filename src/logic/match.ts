import { Entry } from "../interfaces/entry";
import { ReconDetails } from "../interfaces/reconDetails";
import { filterUnmatchedRecords } from "./filters/unmatchedRecords";

interface Input {
  left: Array<Entry>,
  right: Array<Entry>,
}

interface Output {
  left: ReconDetails,
  right: ReconDetails,
}

/**
 * 
 * @param param0 Input payload
 * @returns 
 */
export function match({ left, right }: Input): Output {
  return {
    left: {
      ...filterUnmatchedRecords({ source: left, target: right }),
    },
    right: {
      ...filterUnmatchedRecords({ source: right, target: left }),
    }
  }
}
