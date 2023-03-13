import { VulnerabilitiesGridRow } from "../../shared/types";

export function validVulnerabilitiesGridList(
  data: unknown
): data is VulnerabilitiesGridRow[] {
  return (
    typeof data === "object" && !(data instanceof Error) && Array.isArray(data)
  );
}
