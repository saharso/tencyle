import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { ReactNode, useMemo } from "react";
import styles from "./SelectBox.module.scss";
import classNames from "classnames";

interface SelectBoxProps {
  id?: string;
  options: string[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  endIcon?: ReactNode;
  containerWidth?: boolean;
}
export default function SelectBox({
  options,
  onChange,
  value,
  placeholder,
  id,
  endIcon,
  containerWidth,
}: SelectBoxProps) {
  const selectValue = useMemo(
    () => options.find((e) => e === value) || null,
    [value, options]
  );

  return (
    <Autocomplete
      id={id}
      disablePortal
      options={options}
      data-testid={"SelectBox"}
      renderInput={(params) => <TextField {...params} label={placeholder} />}
      value={selectValue}
      onChange={(_, value) => {
        if (typeof value === "string") {
          onChange(value);
        }
      }}
      classes={{
        root: classNames(
          styles.Root,
          value != null ? styles.hasValue : null,
          containerWidth ? styles.containerWidth : null
        ),
        input: styles.Input,
        inputRoot: styles.InputRoot,
        endAdornment: styles.EndIcon,
      }}
      popupIcon={endIcon}
    />
  );
}
