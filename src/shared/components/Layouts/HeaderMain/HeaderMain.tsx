import { PropsWithChildren } from "react";
import styles from "./HeaderMain.module.scss";

function Header({ children }: PropsWithChildren) {
  return <header data-test={"HeaderMain.Header"}>{children}</header>;
}
function Main({ children }: PropsWithChildren) {
  return (
    <main data-test={"HeaderMain.Main"} className={styles.Main}>
      {children}
    </main>
  );
}
export default function HeaderMain({ children }: PropsWithChildren) {
  return (
    <div data-test={"HeaderMain"} className={styles.HeaderMain}>
      {children}
    </div>
  );
}

HeaderMain.Header = Header;
HeaderMain.Main = Main;
