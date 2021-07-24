import { Entry } from "../../interfaces/entry";
import { compareEntries } from "../compareEntries";

interface AggregateInput {
  source: Array<Entry>;
  target: Array<Entry>;
}

interface AggregateOutput {
  matchingRecords: number;
}

export function aggregateMatchingRecords({ source, target }: AggregateInput): AggregateOutput {
  return { matchingRecords: source.filter(source => target.some(target => compareEntries(source, target))).length };
}
