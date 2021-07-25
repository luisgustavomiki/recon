import { Entry } from "./entry";
import { ReconSummary } from "./reconSummary";

export interface ReconFile {
  name: string;
  entries: Array<Entry>;
  summary: ReconSummary;
}
