import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef, SelectionChangedEvent } from "ag-grid-community";
import styles from "./TGrid.module.scss";

interface TGridProps<Row = unknown> {
  columns: ColDef[];
  rows: Row[];
  loading?: boolean;
  onRowClick?: (e: SelectionChangedEvent<Row>) => void;
}

export default function TGrid({
  columns,
  rows,
  loading,
  onRowClick,
}: TGridProps) {
  const gridRef = useRef();

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
    }),
    []
  );

  const noRowsToShow = useMemo<boolean>(
    () => rows == null || (rows && rows.length === 0),
    [rows]
  );

  return (
    <div data-test="TGrid" className={styles.TGrid}>
      {noRowsToShow && (
        <div className={styles.NoRowsToShow}>No Rows to Show</div>
      )}
      {loading && <div className={styles.Loading}>Loading</div>}
      <div
        className="ag-theme-alpine"
        style={{
          width: "100%",
          height: "100%",
          display: noRowsToShow || loading ? "none" : null,
        }}
      >
        <AgGridReact
          ref={gridRef}
          rowData={rows}
          columnDefs={columns}
          defaultColDef={defaultColDef}
          onSelectionChanged={onRowClick}
          rowSelection={"single"}
        />
      </div>
    </div>
  );
}
