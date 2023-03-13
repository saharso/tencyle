import { VulnerabilitiesGridRow } from "../../shared/types";
import { useState, useCallback, useEffect } from "react";
import { UseQueryResult } from "react-query";
import { validVulnerabilitiesGridList } from "../utils";
import { useNavigate, useLocation } from "react-router-dom";
import RoutePaths from "../Route/RoutePaths";

export default function useLibrarySelectionController() {
  const [data, setData] = useState<VulnerabilitiesGridRow[]>();
  const [loading, setLoading] = useState<boolean>();
  const [libraryName, setLibraryName] = useState<string>();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLibrarySelect = useCallback(
    (libraryName: string) => {
      setLibraryName(libraryName);
      if (!libraryName) {
        setData(null);
        navigate(location.pathname, {
          state: {
            libraryName: null,
          },
        });
      } else {
        navigate(new RoutePaths(libraryName).root, {
          state: {
            libraryName,
          },
        });
      }
    },
    [location]
  );

  const handleQueryFethced = useCallback(
    (
      q: UseQueryResult<VulnerabilitiesGridRow[] | Error>,
      libraryName?: string
    ) => {
      setLoading(q.isLoading);
      if (validVulnerabilitiesGridList(q.data)) {
        setData(q.data);
        if (libraryName) {
          setLibraryName(libraryName);
        }
      }
    },
    []
  );

  const navigateToSelectedRow = useCallback((row: VulnerabilitiesGridRow) => {
    navigate(new RoutePaths(row.name).vulnerabilityDisplay);
  }, []);

  useEffect(() => {
    const locationLibraryName = (location.state as { libraryName: string })
      ?.libraryName;

    if (locationLibraryName) {
      console.log(locationLibraryName);
      setLibraryName(locationLibraryName);
    }
  }, [location.state]);

  return {
    navigateToSelectedRow,
    handleQueryFethced,
    handleLibrarySelect,
    data,
    loading,
    libraryName,
  };
}
