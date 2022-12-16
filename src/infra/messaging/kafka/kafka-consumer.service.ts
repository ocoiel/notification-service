import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['well-rat-10478-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'd2VsbC1yYXQtMTA0NzgkZS2MigHBfywfVGFEaAVnR6LbFbh9zinma-Bp08ccX_8',
          password:
            'DRmOuWMt_YutCRzBVS8sHHHW58HP6tyBb8JwjYnEr3uBuej--MwTM_X1pEOoGim1MxkCbg==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
