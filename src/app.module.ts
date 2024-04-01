import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './database/schemas/users.schema';
import { UserService } from './services/student/user.service';
import { UserController } from './controllers/user/user.controller';

@Module({
  // imports: [ConfigModule.forRoot(), MongooseModule.forRoot('mongodb://<username>:<password>@localhost:27017',{dbName: 'studentdb'})],
  imports: [MongooseModule.forRoot('mongodb://localhost:27017', { dbName: 'testDB' }), MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [AppController,UserController],
  providers: [AppService, UserService],
})

export class AppModule { }
