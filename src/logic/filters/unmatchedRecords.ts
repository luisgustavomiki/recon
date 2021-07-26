import { Entry } from "../../interfaces/entry";
import { compareEntries } from "../compareEntries";

interface FilterInput {
  source: Array<Entry>;
  target: Array<Entry>;
}

interface FilterOutput {
  unmatchedRecords: Array<Entry>;
}

export function filterUnmatchedRecords({ source, target }: FilterInput): FilterOutput {
  return { unmatchedRecords: source.filter(source => !target.some(target => compareEntries(source, target))) };
}
