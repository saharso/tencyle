import { PropsWithChildren } from "react";
import styles from "./AppHeaderWrapper.module.scss";

function Center({ children }: PropsWithChildren) {
  return (
    <div data-test={"AppHeaderWrapper.Center"} className={styles.Center}>
      {children}
    </div>
  );
}

export function AppHeaderWrapper({ children }: PropsWithChildren) {
  return (
    <div data-test={"AppHeaderWrapper"} className={styles.AppHeaderWrapper}>
      {children}
    </div>
  );
}

AppHeaderWrapper.Center = Center;
