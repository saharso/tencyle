import DateCellType, { ColDef } from "../../../shared/components/Grid";
import TGrid from "../../../shared/components/Grid/TGrid";
import { VulnerabilitiesGridRow } from "../../../shared/types";
import SeverityCellType from "./CellTypes/SeverityCellType/SeverityCellType";

const columns: ColDef<Partial<VulnerabilitiesGridRow>>[] = [
  {
    field: "id",
    hide: true,
  },
  {
    field: "summary",
    flex: 1,
    headerName: "Summary",
  },
  {
    field: "severity",
    headerName: "Severity",
    width: 100,
    cellRenderer: SeverityCellType,
  },
  {
    field: "published",
    headerName: "Published",
    minWidth: 80,
    width: 110,
    cellRenderer: DateCellType,
  },
  {
    field: "modified",
    headerName: "Modified",
    minWidth: 80,
    width: 110,
    cellRenderer: DateCellType,
  },
];

interface VulnerabilitiesGridProps {
  data: VulnerabilitiesGridRow[];
  loading: boolean;
  onRowClick: (row: VulnerabilitiesGridRow) => void;
}

export default function VulnerabilitiesGrid({
  data,
  loading,
  onRowClick,
}: VulnerabilitiesGridProps) {
  return (
    <TGrid
      columns={columns}
      rows={data}
      loading={loading}
      onRowClick={(e) => {
        onRowClick(e.api.getSelectedRows()[0] as VulnerabilitiesGridRow);
      }}
    />
  );
}
