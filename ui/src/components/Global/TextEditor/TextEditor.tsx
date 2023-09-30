import React from "react";
import css from "../../../styles/texteditor.module.css";

const TextEditor: React.FC = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.textFieldContainer}>
        <div className={css.controls}></div>
        <textarea name="myTextarea" className={css.textField}></textarea>
      </div>
    </div>
  );
};

export default TextEditor;
