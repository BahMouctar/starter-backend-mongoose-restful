import { Request } from 'express';

interface FileMapper {
  file: Express.Multer.File;
  req: Request;
}

interface FilesMapper {
  files: Express.Multer.File[];
  req: Request;
}

export const fileMapper = ({ file, req }: FileMapper) => {
  const url = `${req.protocol}://${req.headers.host}/${file.path.replace(
    /\\/gi,
    '/',
  )}`;
  return {
    originalname: file.originalname,
    filename: file.filename,
    url,
  };
};

export const filesMapper = ({ files, req }: FilesMapper) => {
  return files.map((file) => fileMapper({ file, req }));
};
