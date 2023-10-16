import React, { useState } from "react";
import css from "../../../styles/texteditor.module.css";
import EditorBase from "./EditorBase";

const TextEditor: React.FC = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.textFieldContainer}>
        <EditorBase />
      </div>
    </div>
  );
};

export default TextEditor;
