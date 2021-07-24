import { Entry } from "../../interfaces/entry";
import { compareEntries } from "../compareEntries";

interface AggregateInput {
  source: Array<Entry>;
}

interface AggregateOutput {
  totalRecords: number;
}

export function aggregateTotalRecords({ source }: AggregateInput): AggregateOutput {
  return { totalRecords: source.length };
}
