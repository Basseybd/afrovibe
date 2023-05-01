import {
  English_US_SVG,
  Deutsch_SVG,
  Italiano_SVG,
  中文_繁體_SVG,
} from "./svg";

import afroVibeCheck from "../assests/afro_vibe_check.png";
import doYouPass from "../assests/do_you_pass.png";
import watchThisSpace from "../assests/watch_this_space.png";
import iPassedTheVibeCheck from "../assests/i_passed_the_vibe_check.png";

export const words = ["WATCH", "THIS", "SPACE"];

export const languages = [
  { name: "English", svg: English_US_SVG },
  { name: "Deutsch", svg: Deutsch_SVG },
  { name: "Italiano", svg: Italiano_SVG },
  { name: "中文 (繁體)", svg: 中文_繁體_SVG },
];

export const locations = [
  { name: "Worldwide" },
  { name: "France" },
  { name: "United Kingdom" },
  { name: "United States" },
];

export const announcements = ["WATCH", "THIS", "SPACE"];

export const featuredItems = [
  {
    name: "afroVibeCheck",
    imagePath: afroVibeCheck,
    altimagePath: doYouPass,
    imageDescription: "afroVibeCheck",
  },
  {
    name: "watchThisSpace",
    imagePath: watchThisSpace,
    altimagePath: iPassedTheVibeCheck,
    imageDescription: "watchThisSpace",
  },
  {
    name: "afroVibeCheck",
    imagePath: afroVibeCheck,
    altimagePath: doYouPass,
    imageDescription: "afroVibeCheck",
  },
  {
    name: "watchThisSpace",
    imagePath: watchThisSpace,
    altimagePath: iPassedTheVibeCheck,
    imageDescription: "watchThisSpace",
  },
];
