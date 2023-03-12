import SelectBox from "../../../shared/components/SelectBox/SelectBox";
import useLibrarySelection from "./hooks/useLibrarySelection";
import SearchIcon from "@mui/icons-material/Search";
import { UseQueryResult } from "react-query";
import { useEffect } from "react";
import { VulnerabilitiesGridRow } from "../../../shared/types";

export default function LibrarySelectBox({
  onQuery,
  onChange,
}: {
  onQuery: (query: UseQueryResult<VulnerabilitiesGridRow[] | Error>) => void;
  onChange?: (libraryName: string) => void;
}) {
  const {
    libraryListQuery,
    selectedLibrary,
    handleSetParams,
    vulnerabilityResultQuery,
  } = useLibrarySelection();

  useEffect(() => {
    onQuery(vulnerabilityResultQuery);
  }, [vulnerabilityResultQuery, onQuery]);

  if (!libraryListQuery?.data) {
    return <div>Loading</div>;
  }

  return (
    <SelectBox
      options={libraryListQuery?.data || []}
      onChange={(value) => {
        handleSetParams(value);
        onChange(value);
      }}
      value={selectedLibrary}
      placeholder="Search a library"
      endIcon={<SearchIcon />}
      containerWidth={true}
    />
  );
}
