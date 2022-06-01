import { BadRequestException } from '@nestjs/common';
import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { isObject } from 'util';

@Injectable()
export class ParseJsonPipe implements PipeTransform<string> {
  async transform(valeur: string, metadata: ArgumentMetadata) {
    console.log(valeur);
    const val = JSON.parse(valeur);
    if (!isObject(val)) {
      throw new BadRequestException('Validation failed');
    }
    return val;
  }
}
