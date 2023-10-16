import React from "react";
import { EditorControlProps } from "./interface";
import css from "../../../styles/editorcontrols.module.css";

import { AiOutlineItalic, AiOutlineBold } from "react-icons/ai";

const EditorControls: React.FC<EditorControlProps> = ({ onButtonClick }) => {
  return (
    <div className={css.wrapper}>
      <div
        onClick={(e) => onButtonClick(e, "bold")}
        className={css.buttonTileInactive}
      >
        <AiOutlineBold className={css.icon} />
      </div>
      <div
        onClick={(e) => onButtonClick(e, "italic")}
        className={css.buttonTileInactive}
      >
        <AiOutlineItalic className={css.icon} />
      </div>
    </div>
  );
};

export default EditorControls;
