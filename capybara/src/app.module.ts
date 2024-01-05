import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { DBConnectConfigModule } from './config/db-connect.config.module';

@Module({
  imports: [DBConnectConfigModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
