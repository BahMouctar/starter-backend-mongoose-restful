import { Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export abstract class CacheInterceptor implements NestInterceptor {
  protected abstract readonly isCached: () => boolean;
  intercept(): Observable<any> {
    return;
  }
}
