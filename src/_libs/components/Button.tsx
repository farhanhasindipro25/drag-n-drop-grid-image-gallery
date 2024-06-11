import React from "react";
import { BUTTON_STYLES } from "../styles/ButtonStyles";
import { ButtonProps } from "../interfaces/ButtonProps";

export default function Button(props: ButtonProps) {
  const { onClick, title } = props;
  return (
    <button onClick={onClick} type="submit" className={BUTTON_STYLES}>
      {title}
    </button>
  );
}
