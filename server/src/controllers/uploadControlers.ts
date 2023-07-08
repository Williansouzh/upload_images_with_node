import { Request, Response } from "express";
import * as imageServices from "../services/imagesServices";
import path from "path";
export const upload_image = async (req: Request, res: Response) => {
  if (req.file) {
    imageServices.uploadImage(req.file.filename);
    res.status(201).json({
      filename: req.file.filename,
    });
    return req.file.filename;
  } else {
    res.status(404).json({
      error: "data don't sent",
    });
    console.log("data don't sent");
  }
};

export const list = async (req: Request, res: Response) => {};
