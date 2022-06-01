import { HttpException, HttpStatus } from '@nestjs/common';
import { Request } from 'express';
import { extname } from 'path';

export const editFileName = (
  req: Request,
  file: Express.Multer.File,
  callback,
) => {
  const name = file.originalname.split('.')[0];
  const fileExtName = extname(file.originalname);
  const randomName = Array(4)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');
  callback(null, `${name}-${randomName}${fileExtName}`);
  // callback(null, `${name}-${randomName}${fileExtName}`.replace(/ /gi, '-'));
};

export const imageFileFilter = (
  req: Request,
  file: Express.Multer.File,
  callback,
) => {
  if (!file.originalname.toLowerCase().match(/\.(jpg|jpeg|png|gif)$/)) {
    return callback(
      new HttpException(
        'File extension invalid (jpg,jpeg,png,gif).',
        HttpStatus.BAD_REQUEST,
      ),
      false,
    );
  }
  callback(null, true);
};

export const documentFileFilter = (
  req: Request,
  file: Express.Multer.File,
  callback,
) => {
  if (
    !file.originalname.toLowerCase().match(/\.(pdf|xls|xlsx|csv|doc|docx)$/)
  ) {
    return callback(
      new HttpException(
        'File extension invalid (pdf|xls|xlsx|csv|doc|docx).',
        HttpStatus.BAD_REQUEST,
      ),
      false,
    );
  }
  callback(null, true);
};

export const FileFilter = (
  req: Request,
  file: Express.Multer.File,
  callback,
) => {
  if (!file.originalname.toLowerCase().match(/\.(xls|xlsx|csv|txt)$/)) {
    return callback(
      new HttpException(
        'File extension invalid (xls|xlsx|csv|txt).',
        HttpStatus.BAD_REQUEST,
      ),
      false,
    );
  }
  callback(null, true);
};

export const documentFileAllExtensionFilter = (
  req: Request,
  file: Express.Multer.File,
  callback,
) => {
  callback(null, true);
};

export const fileLimits = () => ({
  fileSize: +process.env.FILE_SIZE * 1024 * 1024,
});
