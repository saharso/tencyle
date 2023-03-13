import classNames from "classnames";
import { PropsWithChildren } from "react";
import styles from "./HeaderMain.module.scss";

function Header({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <header data-test={"HeaderMain.Header"} className={className}>
      {children}
    </header>
  );
}
function Main({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <main
      data-test={"HeaderMain.Main"}
      className={classNames(styles.Main, className)}
    >
      {children}
    </main>
  );
}
export default function HeaderMain({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <article
      data-test={"HeaderMain"}
      className={classNames(styles.HeaderMain, className)}
    >
      {children}
    </article>
  );
}

HeaderMain.Header = Header;
HeaderMain.Main = Main;
