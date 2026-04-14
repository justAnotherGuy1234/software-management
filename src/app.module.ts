import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SoftwareModuleModule } from './software-module/software-module.module';

@Module({
    imports: [
	TypeOrmModule.forRoot({
	    type: 'sqlite',
	    database: 'data/dev.sqlite',
	    entities: [__dirname + '/**/*.entity{.ts,.js}'],
	    synchronize: false
	}),
	SoftwareModuleModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
