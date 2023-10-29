import React, { useState } from "react";
import css from "../../../styles/editorbase.module.css";
import { createEditor, BaseEditor, Editor } from "slate";
import { Slate, Editable, withReact, ReactEditor } from "slate-react";
import EditorControls from "./EditorControls";
import { CustomElement, CustomText, Format } from "./interface";
import { stylingProcessor } from "./utils/stylingProcessor";
import ReactDOMServer from 'react-dom/server';
import { serialize } from "./utils/htmlSerializer";



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
    children: [{ text: "" }],
  },
];

const EditorBase: React.FC = () => {
  const [editor] = useState(() => withReact(createEditor()));
  const [markedButtons, setMarkedButtons] = useState<any>({})
  
  //this value is only needed to serialize for db storage!!
  const [value, setValue] = useState<any[]>(initialValue);
  
  const serializedHTML: React.ReactNode[] = value.map(serialize);
  const htmlString = ReactDOMServer.renderToStaticMarkup(<>{serializedHTML}</>);
  
  //applies styling on tile click
  function activateStyling(e: any, type: Format) {
    e.preventDefault();
    const isActive = Editor.marks(editor)?.[type] === true;
    
    if (isActive) {
      Editor.removeMark(editor, type);
    } else {
      Editor.addMark(editor, type, true);
    }
    setMarkedButtons(Editor.marks(editor))
  }

  return (
    <div className={css.wrapper}>
      <div className={css.textField}>
        <Slate editor={editor} initialValue={initialValue} onChange={newValue => setValue(newValue)}>
          <EditorControls markedButtons={markedButtons} onButtonClick={activateStyling} />
          <Editable renderLeaf={stylingProcessor} />
        </Slate>
      </div>
    </div>
  );
};

export default EditorBase;
