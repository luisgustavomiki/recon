import { Entry } from "../interfaces/entry";

export function compareEntries(entry1: Entry, entry2: Entry): boolean {
  return entry1.amount === entry2.amount && entry1.date === entry2.date && entry1.reference === entry2.reference;
}
