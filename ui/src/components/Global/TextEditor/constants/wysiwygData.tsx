import { AiOutlineBold, AiOutlineItalic } from "react-icons/ai";
import {
  MdFormatListBulleted,
  MdOutlineFormatListNumbered,
} from "react-icons/md";

const fontSizeData = [
  { desc: "Paragraph", tags: "p" },
  { desc: "Headline 1", tags: "h1" },
];

export const wysiwygData = [
  {
    type: "DROPDOWN",
    symbol: "EMPTY",
    purpose: "FONT_SIZE",
    data: fontSizeData,
  },
  {
    type: "SYMBOL",
    symbol: AiOutlineBold,
    data: [{ type: "Bold", tags: "<b>" }],
  },
  {
    type: "SYMBOL",
    symbol: AiOutlineItalic,
    data: [{ type: "Italic", tags: "<i>" }],
  },
  {
    type: "SYMBOL",
    symbol: MdFormatListBulleted,
    data: [{ type: "BulletList", tags: "<ul>" }],
  },
  {
    type: "SYMBOL",
    symbol: MdOutlineFormatListNumbered,
    data: [{ type: "NumberedList", tags: "<ol>" }],
  },
];
