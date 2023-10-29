import { Editor } from "slate";

export type Format = keyof Omit<CustomText, "text">;

export type BlockNode = {
  object: 'block';
  type: string;
  data?: {
    align?: 'left' | 'center' | 'right' | 'justify';
  };
  children: CustomText[];
};

export type TextNode = {
  object: 'text';
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  text: string;
};

export interface EditorControlProps {
  onButtonClick: (e: any, style: Format) => void;
  markedButtons: any
}

export type CustomElement = { type: "paragraph"; children: CustomText[] };

export type CustomText = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  link?: string;  
  orderedlist?: boolean;
  unorderedlist?: boolean;
  "align-left"?: boolean;
  "align-center"?: boolean;
  "align-right"?: boolean;
  "align-justify"?: boolean;
  image?: string; 
};
