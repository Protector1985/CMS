import React from "react";
import css from "../../../styles/editorcontrol.module.css";
import { EditorControlProps } from "./interface";

const EditorControl: React.FC<EditorControlProps> = ({
  symbol,
  htmlTag,
  isSelected,
}) => {
  return <div className={css.wrapper}></div>;
};
