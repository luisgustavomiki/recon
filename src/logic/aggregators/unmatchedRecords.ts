import { Entry } from "../../interfaces/entry";
import { compareEntries } from "../compareEntries";

interface AggregateInput {
  source: Array<Entry>;
  target: Array<Entry>;
}

interface AggregateOutput {
  unmatchedRecords: number;
}

export function aggregateUnmatchedRecords({ source, target }: AggregateInput): AggregateOutput {
  return { unmatchedRecords: source.filter(source => !target.some(target => compareEntries(source, target))).length };
}
