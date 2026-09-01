export function getImgSrc(img) {
  if (!img) return "";
  if (typeof img === "string") return img;
  if (typeof img === "object" && img.src) return img.src;
  if (typeof img === "object" && img.default) {
    return typeof img.default === "string" ? img.default : img.default.src || "";
  }
  return String(img);
}
