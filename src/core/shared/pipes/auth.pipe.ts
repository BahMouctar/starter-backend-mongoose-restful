import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { Validate } from '../systems/validator.system';

@Injectable()
export class AuthPipe implements PipeTransform<any> {
  async transform(value, { metatype }: ArgumentMetadata) {
    const object = await Validate(metatype, value);
    return object;
  }
}
