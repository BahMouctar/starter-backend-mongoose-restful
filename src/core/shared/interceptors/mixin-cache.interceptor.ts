import { mixin } from '@nestjs/common';
import { CacheInterceptor } from './cache.interceptor';

export const mixinCacheInterceptor = (isCached: () => boolean) => {
  return mixin(
    class extends CacheInterceptor {
      public readonly isCached = isCached;
    },
  );
};
