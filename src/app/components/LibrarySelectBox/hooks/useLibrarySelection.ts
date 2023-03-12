import { useCallback, useState } from "react";
import { useApi } from "../../../../shared/entities/api";
import EndPoints from "../../../../shared/entities/api/EndPoints";
import {
  VulnerabilitiesGridRow,
  VulnerabilityItemResponse,
} from "../../../../shared/types";

function parseApi(rawData: VulnerabilityItemResponse) {
  try {
    const list = rawData.vulns;
    return list.map<VulnerabilitiesGridRow>((item) => {
      return {
        id: item.id,
        name: item.affected[0]?.package?.name || "N/A",
        summary: item.summary || "N/A",
        details: item.details || "N/A",
        modified: item.modified ? new Date(item.modified) : "N/A",
        published: item.published ? new Date(item.published) : "N/A",
        severity: item.database_specific?.severity || "N/A",
        references: item.references || "N/A",
        schemaVersion: item.schema_version || "N/A",
        githubReviewed: item.database_specific?.github_reviewed || false,
        githubReviewedAt: item.database_specific?.github_reviewed_at
          ? new Date(item.database_specific.github_reviewed_at as string)
          : null,
      } as VulnerabilitiesGridRow;
    });
  } catch (e) {
    return new Error("Data doesn't match", e);
  }
}

export default function useLibrarySelection() {
  const { query: libraryListQuery } = useApi<string[]>({
    endPoint: EndPoints.libraryList,
  });
  const [selectedLibrary, setSelectedLibrary] = useState<string>();

  const { setParams, query: vulnerabilityResultQuery } = useApi<
    VulnerabilitiesGridRow[] | Error,
    VulnerabilityItemResponse
  >({
    endPoint: EndPoints.libraryVuln,
    mutable: true,
    parser: parseApi,
  });

  const handleSetParams = useCallback((library: string) => {
    setSelectedLibrary(library);
    localStorage.setItem("library", library);
    if (library) {
      setParams({ package: { name: library, ecosystem: "npm" } });
    } else {
      setParams(null);
    }
  }, []);

  return {
    libraryListQuery,
    selectedLibrary,
    handleSetParams,
    vulnerabilityResultQuery,
  };
}
