import { PropsWithChildren } from "react";
import Heading2 from "../../../shared/components/Headings/Heading2/Heading2";
import HeaderMain from "../../../shared/components/Layouts/HeaderMain/HeaderMain";
import styles from "./AppBodyWrapper.module.scss";

export default function AppBodyWrapper({
  children,
  title,
}: PropsWithChildren<{ title: string }>) {
  return (
    <HeaderMain>
      <HeaderMain.Header className={styles.Header}>
        <Heading2>{title}</Heading2>
      </HeaderMain.Header>
      <HeaderMain.Main>{children}</HeaderMain.Main>
    </HeaderMain>
  );
}
