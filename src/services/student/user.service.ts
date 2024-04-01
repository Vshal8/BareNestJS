import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from 'src/database/interfaces/users.interface';
import { CreateUserDto } from 'src/dtos/create-user.dto';
import { UpdateUserDto } from 'src/dtos/update-user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private userModel: Model<IUser>) { }

    async createUser(createUserDto: CreateUserDto): Promise<IUser> {
        const newStudent = await new this.userModel(createUserDto);
        return newStudent.save();
    }

    async updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<IUser> {
        const existingUser = await this.userModel.findByIdAndUpdate(userId, updateUserDto, { new: true })
        if (!existingUser) {
            throw new NotFoundException(`Student #${userId} not found`);
        }
        return existingUser;
    }

    async getAllUsers(): Promise<IUser[]> {
        const userData = await this.userModel.find();
        if (!userData || userData.length == 0) {
            throw new NotFoundException('Students data not found!');
        }
        return userData;
    }

    async getUser(userId: string): Promise<IUser> {
        const existingUser = await this.userModel.findById(userId).exec();
        if (!existingUser) {
            throw new NotFoundException(`Student #${userId} not found`);
        }
        return existingUser;
    }

    async deleteUser(userId: string): Promise<IUser> {
        const deletedUser = await this.userModel.findByIdAndDelete(userId);
        if (!deletedUser) {
            throw new NotFoundException(`Student #${userId} not found`);
        }
        return deletedUser;
    }
}
