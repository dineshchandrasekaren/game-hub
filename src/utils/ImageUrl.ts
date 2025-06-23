import noimage from "../assets/no-image-placeholder-6f3882e0.webp";

function getResizedImage(url: string) {
  if (!url) return noimage;
  const urlParts = url.split("/");
  urlParts.splice(urlParts.indexOf("media") + 1, 0, "crop", "600", "400");
  return urlParts.join("/");
}

export default getResizedImage;
