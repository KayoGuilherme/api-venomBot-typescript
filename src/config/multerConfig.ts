import multer, { StorageEngine } from "multer";
import path from "path";
import * as fs from 'fs-extra'

// Diretório de upload
const uploadDir = path.resolve(__dirname, "../../../uploads");

// Verifique e crie o diretório se não existir
fs.ensureDirSync(uploadDir);

const storage: StorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Diretório de destino
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueSuffix); // Nome do arquivo
  },
});

export const upload = multer({ storage });
