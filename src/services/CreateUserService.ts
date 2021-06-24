import { getCustomRepository } from "typeorm";
import { IUserRequest } from "../interfaces/IUserRequest";
import { UsersRepositories } from "../repositories/UsersRepositories";

export class CreateUserService {
    async execute({name, email, admin}: IUserRequest){
        const usersRepositories = getCustomRepository(UsersRepositories)

        if(!email){
            throw new Error('email incorect')
        }

        const userAlreadyExists = await usersRepositories.findOne({email})

        if(userAlreadyExists){
            throw new Error('user already exists')
        }

        const user = usersRepositories.create({name, email, admin})
        await usersRepositories.save(user)

        return user
    }
}