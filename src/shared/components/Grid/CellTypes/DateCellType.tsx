import { ICellRendererParams } from "ag-grid-community";
import format from "date-fns/format";

export default function DateCellType(props: ICellRendererParams) {
  return <span>{format(new Date(props.value as Date), "MM/dd/yyyy")}</span>;
}
