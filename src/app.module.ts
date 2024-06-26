import { Module } from '@nestjs/common';
import { OrdersModule } from './orders/orders.module';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { envs } from './config/envs';
import { NatsModule } from './transporter/nats.module';


@Module({
  
  controllers: [],
  providers: [],
  imports: [OrdersModule],
})
export class AppModule {}
