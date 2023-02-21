import download from "download";
import colors from "./colors.js";

const args = process.argv;
const WIDTH = args[2] || 16;
const HEIGHT = args[3] || 16;

colors.map((color, index) => {

  const prefix = index.toString().padStart(3, '0');
  const hex = color.hex.slice(-6);
  const url = `https://singlecolorimage.com/get/${hex}/${WIDTH}x${HEIGHT}`;
  const filename = `${prefix}_${color.name}.png`;

  return download(url, 'colors2', { filename });
});