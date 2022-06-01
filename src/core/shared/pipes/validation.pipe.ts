import { HttpException, HttpStatus } from '@nestjs/common';
import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ValidationPipe
  implements PipeTransform<string | boolean | number | Array<any> | any, any>
{
  async transform(
    valeur: string | boolean | number | Array<any> | any,
    metadata: ArgumentMetadata,
  ): Promise<any> {
    const { metatype } = metadata;
    if (!metatype || !this.toValidate(metatype)) {
      return valeur;
    }
    const object = plainToClass(metatype, valeur);
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new HttpException(
        {
          status: {
            code: HttpStatus.BAD_REQUEST,
            error: 'Les paramètres de la requète sont incorrectes',
            message: errors.map((error) => ({
              property: error.property,
              constraints: error.constraints,
            })),
          },
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return valeur;
  }

  private toValidate(metatype): boolean {
    const types = [String, Boolean, Number, Array, Object];
    return !types.find((type) => metatype === type);
  }
}
