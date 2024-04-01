import { CreateUserDto } from 'src/dtos/create-user.dto';
import { UpdateUserDto } from 'src/dtos/update-user.dto';
import { UserService } from 'src/services/student/user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(response: any, createUserDto: CreateUserDto): Promise<any>;
    updateUser(response: any, userId: string, updateUserDto: UpdateUserDto): Promise<any>;
    getUsers(response: any): Promise<any>;
    getStudent(response: any, userId: string): Promise<any>;
    deleteUser(response: any, userId: string): Promise<any>;
}
