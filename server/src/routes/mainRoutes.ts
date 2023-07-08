import Router from "express";
import multer from "multer";

const path = require("path");
import * as imageControler from "../controllers/uploadControlers";
const router = Router();

const storage = multer.diskStorage({
  destination: "public/users/image", // Caminho relativo para o diretório de destino
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const filename =
      file.fieldname +
      "-" +
      uniqueSuffix +
      "." +
      file.originalname.split(".").pop();
    cb(null, filename);
  },
});

const upload = multer({ storage });
router.post(
  "/upload",
  upload.single("imagefield"),
  imageControler.upload_image
);

export default router;
