import { HttpException, HttpStatus } from '@nestjs/common';
import { validate, isDate } from 'class-validator';
import { plainToClass } from 'class-transformer';

export function IsDate(valeur): boolean {
  const Dt = new Date(valeur);
  //   const validator = new Validator();
  return isDate(Dt);
}

export async function Validate(metatype, valeur) {
  const object = plainToClass(metatype, valeur);
  const errors: any = await validate(object);
  if (errors.length > 0) {
    throw new HttpException(
      {
        status: {
          code: HttpStatus.BAD_REQUEST,
          error: 'Les paramètres de la requète sont incorrectes',
          message: errors,
        },
      },
      HttpStatus.BAD_REQUEST,
    );
  }
  return object;
}

export function ValidatePrimaryKey(
  objectValeur: object,
  ModelKey: Array<string>,
): boolean {
  let state = true;
  ModelKey.forEach(function (key) {
    if (!(key in objectValeur)) {
      state = false;
    }
  });
  return state;
}
