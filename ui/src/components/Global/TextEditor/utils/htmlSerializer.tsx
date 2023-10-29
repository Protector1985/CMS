import { Node, Text as SlateText, Element as SlateElement } from 'slate';

type BlockNode = {
  type: string;
  align?: 'left' | 'center' | 'right' | 'justify';
  children: SlateText[];
};

type StyledText = {
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  text: string;
};

const rules = [
  {
    // Serialize the block elements with alignment
    serialize: (obj: SlateElement, children: React.ReactNode) => {
      if (obj.type === 'paragraph') {
        const block = obj as BlockNode;
        let style: React.CSSProperties = {};
        if (block.align) {
          style.textAlign = block.align;
        }
        return <p style={style}>{children}</p>;
      }
      return undefined;
    },
  },
  {
    // Serialize the text nodes with styling
    serialize: (obj: SlateText, children: React.ReactNode) => {
      const styledText = obj as StyledText;
      if (styledText.bold) {
        children = <strong>{children}</strong>;
      }
      if (styledText.italic) {
        children = <em>{children}</em>;
      }
      if (styledText.underline) {
        children = <u>{children}</u>;
      }
      if (styledText.strikethrough) {
        children = <del>{children}</del>;
      }
      return children;
    },
  },
];

export function serialize(node: Node): React.ReactNode {
  if (SlateText.isText(node)) {
    return rules[1].serialize(node as any, node.text);
  }
  if (SlateElement.isElement(node)) {
    return rules[0].serialize(node as any, node.children.map(n => serialize(n)));
  }
  return null;
}
