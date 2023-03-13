import { PropsWithChildren } from "react";
import styles from "./Heading2.module.scss";

export default function Heading2({ children }: PropsWithChildren) {
  return <h2 className={styles.Heading2}>{children}</h2>;
}
