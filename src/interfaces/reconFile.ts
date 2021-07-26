import { Entry } from "./entry";
import { ReconDetails } from "./reconDetails";
import { ReconSummary } from "./reconSummary";

export interface ReconFile {
  name: string;
  entries: Array<Entry>;
  summary: ReconSummary;
  details: ReconDetails;
}
