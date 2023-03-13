import { PropsWithChildren } from "react";
import styles from "./AppHeaderWrapper.module.scss";

export function AppHeaderWrapper({ children }: PropsWithChildren) {
  return (
    <div data-test={"AppHeaderWrapper"} className={styles.AppHeaderWrapper}>
      {children}
    </div>
  );
}
