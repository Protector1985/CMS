import React from "react";
import { EditorControlProps } from "./interface";
import css from "../../../styles/editorcontrols.module.css";
import {BsJustify} from 'react-icons/bs'

import {
  AiOutlineItalic,
  AiOutlineBold,
  AiOutlineUnderline,
  AiOutlineStrikethrough,
  AiOutlineLink,
  AiOutlineOrderedList,
  AiOutlineUnorderedList,
  AiOutlinePicture,
  AiOutlineAlignLeft,
  AiOutlineAlignCenter,
  AiOutlineAlignRight,

} from "react-icons/ai";

const EditorControls: React.FC<EditorControlProps> = ({ onButtonClick, markedButtons }) => {
  
  return (
    <div className={css.wrapper}>
      <div
        onClick={(e) => onButtonClick(e, "bold")}
        className={markedButtons?.bold ? css.buttonTileActive : css.buttonTileInactive}
      >
        <AiOutlineBold className={css.icon} />
      </div>
      <div
        onClick={(e) => onButtonClick(e, "italic")}
        className={markedButtons?.italic ? css.buttonTileActive : css.buttonTileInactive}
      >
        <AiOutlineItalic className={css.icon} />
      </div>
      <div
        onClick={(e) => onButtonClick(e, 'underline')}
        className={markedButtons?.underline ? css.buttonTileActive : css.buttonTileInactive}
      >
        <AiOutlineUnderline className={css.icon} />
      </div>
      <div
        onClick={(e) => onButtonClick(e, 'strikethrough')}
        className={markedButtons?.strikethrough? css.buttonTileActive : css.buttonTileInactive}
      >
        <AiOutlineStrikethrough className={css.icon} />
      </div>
      <div
        onClick={(e) => onButtonClick(e, 'link')}
        className={markedButtons?.link ? css.buttonTileActive : css.buttonTileInactive}
      >
        <AiOutlineLink className={css.icon} />
      </div>
      <div
        onClick={(e) => onButtonClick(e, 'orderedlist')}
        className={markedButtons?.orderedlist ? css.buttonTileActive : css.buttonTileInactive}
      >
        <AiOutlineOrderedList className={css.icon} />
      </div>
      <div
        onClick={(e) => onButtonClick(e, 'unorderedlist')}
        className={markedButtons?.unorderedlist ? css.buttonTileActive : css.buttonTileInactive}
      >
        <AiOutlineUnorderedList className={css.icon} />
      </div>
      <div
        onClick={(e) => onButtonClick(e, "image")} // Use 'image' as a format type
        className={markedButtons?.image ? css.buttonTileActive : css.buttonTileInactive}
      >
        <AiOutlinePicture className={css.icon} /> {/* Assuming 'BsImage' represents an image icon */}
      </div>
      <div
        onClick={(e) => onButtonClick(e, 'align-left')}
        className={markedButtons?.["align-left"] ? css.buttonTileActive : css.buttonTileInactive}
      >
        <AiOutlineAlignLeft className={css.icon} />
      </div>
      <div
        onClick={(e) => onButtonClick(e, 'align-center')}
        className={markedButtons?.["align-center"] ? css.buttonTileActive : css.buttonTileInactive}
      >
        <AiOutlineAlignCenter className={css.icon} />
      </div>
      <div
        onClick={(e) => onButtonClick(e, 'align-right')}
        className={markedButtons?.["align-right"] ? css.buttonTileActive : css.buttonTileInactive}
      >
        <AiOutlineAlignRight className={css.icon} />
      </div>
      <div
        onClick={(e) => onButtonClick(e, 'align-justify')}
        className={markedButtons?.["align-justify"] ? css.buttonTileActive : css.buttonTileInactive}
      >
        <BsJustify className={css.icon} />
      </div>
    </div>
  );
};

export default EditorControls;
