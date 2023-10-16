import { textFormats } from "../constants/textFormats";

export function stylingProcessor(props: any) {
  console.log(props);
  switch (props.leaf[textFormats.BOLD]) {
    case true:
      return <strong>{props.children}</strong>;
    default:
      return props.children;
  }
}
