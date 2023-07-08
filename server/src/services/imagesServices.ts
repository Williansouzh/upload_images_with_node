import { Image } from "../models/Image";

export const uploadImage = async (image: string) => {
  await Image.create({
    image: image,
  });
};
export const listImages = async () => {
  const images = Image.findAll();
  return images;
};
