import { textFormats } from "../constants/textFormats";

export function stylingProcessor(props: any) {
  let children = props.children;

  if (props.leaf[textFormats.BOLD]) {
    children = <strong>{children}</strong>;
  }

  if (props.leaf[textFormats.ITALIC]) {
    children = <em>{children}</em>;
  }

  if (props.leaf[textFormats.UNDERLINE]) {
    children = <u>{children}</u>;
  }

  if (props.leaf[textFormats.STRIKETHROUGH]) {
    children = <s>{children}</s>;
  }

  if (props.leaf[textFormats.LINK]) {
    children = <a href={props.leaf[textFormats.LINK]}>{children}</a>;
  }

  
  let style: React.CSSProperties = {};
  if (props.leaf[textFormats.ALIGN_LEFT]) {
    style.textAlign = "left";
  }
  if (props.leaf[textFormats.ALIGN_CENTER]) {
    style.textAlign = "center";
  }
  if (props.leaf[textFormats.ALIGN_RIGHT]) {
    style.textAlign = "right";
  }
  if (props.leaf[textFormats.ALIGN_JUSTIFY]) {
    style.textAlign = "justify";
  }

  return <span style={style}>{children}</span>;
}

