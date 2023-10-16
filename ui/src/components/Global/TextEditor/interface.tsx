export type Format = "bold" | "italic" | "underline";

export interface EditorControlProps {
  onButtonClick: (e: any, style: Format) => void;
}

export type CustomElement = { type: "paragraph"; children: CustomText[] };

export type CustomText = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
};
