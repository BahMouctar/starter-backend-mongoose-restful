import {
  PipeTransform,
  Injectable,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import * as mongoDb from 'mongodb';

@Injectable()
export class ObjectIdPipe implements PipeTransform<string> {
  async transform(valeur: string) {
    const message = `${valeur} is not a valid ObjectId`;
    const ObjectID = mongoDb.ObjectID;
    if (ObjectID.isValid(valeur)) {
      return valeur;
    } else {
      throw new HttpException(
        { status: { Code: HttpStatus.BAD_REQUEST, error: message } },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
