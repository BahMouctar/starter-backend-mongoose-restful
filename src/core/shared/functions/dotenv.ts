import * as dotenv from 'dotenv';

export const dotEnv = () => {
  dotenv.config({
    path:
      '.env.local' || '.env.development' || '.env.production' || '.env.staging',
  });
};
