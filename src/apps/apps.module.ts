import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import configuration from 'src/config/configuration';
import { dotEnv } from 'src/core/shared/functions/dotenv';
import { Modules1Module } from './module-1/module-1.module';
import { ModulesnModule } from './module-n/modulen.module';
dotEnv();

const DBCONFIG = configuration().db;
@Module({
  imports: [
    MongooseModule.forRoot(DBCONFIG.connexionString, DBCONFIG.options),
    Modules1Module,
    ModulesnModule,
  ],
  exports: [MongooseModule, Modules1Module, ModulesnModule],
})
export class AppsModule {}
