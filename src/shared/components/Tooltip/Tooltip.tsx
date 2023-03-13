import Tooltip from "@mui/material/Tooltip";
import React, { PropsWithChildren } from "react";

interface ToolTipProps {
  text: string;
  className?: string;
}
export default function ToolTip({
  text,
  children,
  className,
}: PropsWithChildren<ToolTipProps>) {
  return (
    <Tooltip title={text} placement="top">
      <span className={className}>{children}</span>
    </Tooltip>
  );
}
