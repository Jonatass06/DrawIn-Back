import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { DrawModule } from './draw/draw.module';
import { CourseModule } from './course/course.module';
import { ActivityModule } from './activity/activity.module';
import { SugestionModule } from './sugestion/sugestion.module';
import { SugestionUserModule } from './sugestion_user/sugestion_user.module';
import { TipModule } from './tip/tip.module';
import { FileModule } from './file/file.module';
import { ConnectorRepository } from './connector/conector.repository';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({ isGlobal: true }),
    DrawModule,
    CourseModule,
    ActivityModule,
    SugestionModule,
    SugestionUserModule,
    TipModule,
    FileModule,
  ],
  controllers: [],
  providers: [ConnectorRepository],
})
export class AppModule {}
