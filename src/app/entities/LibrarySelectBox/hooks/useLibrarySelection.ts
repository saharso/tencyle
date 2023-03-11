import { useCallback, useState } from "react";
import { useApi } from "../../../../shared/entities/api";
import EndPoints from "../../../../shared/entities/api/EndPoints";

export default function useLibrarySelection() {
  const { query: libraryListQuery } = useApi<string[]>(EndPoints.libraryList);
  const [selectedLibrary, setSelectedLibrary] = useState<string>();
  const { setParams, query: vulnerabilityResultQuery } = useApi(
    EndPoints.libraryVuln,
    true
  );

  const handleSetParams = useCallback((library: string) => {
    setSelectedLibrary(library);
    localStorage.setItem("library", library);
    setParams({ package: { name: library, ecosystem: "npm" } });
  }, []);

  return {
    libraryListQuery,
    selectedLibrary,
    handleSetParams,
    vulnerabilityResultQuery,
  };
}
