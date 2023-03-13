import classNames from "classnames";
import { ICellRendererParams } from "../../../../../shared/components/Grid";
import ToolTip from "../../../../../shared/components/Tooltip/Tooltip";
import { SeverityKinds } from "../../../../../shared/types";
import styles from "./SeverityCellType.module.scss";

export default function SeverityCellType(props: ICellRendererParams) {
  const value = props.value as SeverityKinds;
  return (
    <div
      className={classNames(
        styles.SeverityCellType,
        styles[value.toLocaleLowerCase()]
      )}
      aria-label={props.value as string}
    >
      <ToolTip text={props.value as string} className={styles.Tooltip}>
        <div className={styles.Circle} />
      </ToolTip>
    </div>
  );
}
