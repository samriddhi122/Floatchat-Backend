import path from "path";
import fs from "fs";
import { spawn } from "child_process";

export const saveAndConvertToParquet = async (file) => {
    const uploadsDir = path.join(process.cwd(), "FloatChat-Backend", "data", "uploads");
    if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

    const originalPath = path.join(uploadsDir, file.originalname);
    fs.writeFileSync(originalPath, file.buffer);

    const parquetFile = path.join(uploadsDir, file.originalname.split(".")[0] + ".parquet");

    const pyScript = path.join(process.cwd(), "FloatChat-Backend", "python", "convert_to_parquet.py");

    await new Promise((resolve, reject) => {
        const py = spawn("python", [pyScript, originalPath, parquetFile]);
        py.stdout.on("data", data => console.log(data.toString()));
        py.stderr.on("data", err => console.error(err.toString()));
        py.on("close", code => code === 0 ? resolve() : reject("Python script failed"));
    });

    return parquetFile;
};
