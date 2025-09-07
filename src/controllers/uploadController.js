import { saveAndConvertToParquet } from "../utils/uploadUtils.js";

export const uploadController = async (req, res) => {
  try {
    console.log("req.body:", req.body);
    console.log("req.file:", req.file); 
    console.log("req.headers['content-type']:", req.headers['content-type']);


    if (!req.file) return res.status(400).json({ error: "File required" });

    const parquetPath = await saveAndConvertToParquet(req.file);


    res.json({
      message: "File uploaded & converted to Parquet",
      parquetPath
    });
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};
