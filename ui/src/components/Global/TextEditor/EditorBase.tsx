import React, { useState } from "react";
import css from "../../../styles/editorbase.module.css";
import { createEditor, BaseEditor, Editor } from "slate";
import { Slate, Editable, withReact, ReactEditor } from "slate-react";
import EditorControls from "./EditorControls";
import { CustomElement, CustomText, Format } from "./interface";
import { stylingProcessor } from "./utils/stylingProcessor";

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

const initialValue: CustomElement[] = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
];

const EditorBase: React.FC = () => {
  const [editor] = useState(() => withReact(createEditor()));

  //applies styling on tile click
  function activateStyling(e: any, type: Format) {
    e.preventDefault();
    const isActive = Editor.marks(editor)?.[type] === true;

    if (isActive) {
      Editor.removeMark(editor, type);
    } else {
      Editor.addMark(editor, type, true);
    }
  }

  return (
    <div className={css.wrapper}>
      <div className={css.textField}>
        <Slate editor={editor} initialValue={initialValue}>
          <EditorControls onButtonClick={activateStyling} />
          <Editable renderLeaf={stylingProcessor} />
        </Slate>
      </div>
    </div>
  );
};

export default EditorBase;
