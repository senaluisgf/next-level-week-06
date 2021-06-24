import { Request, Response } from "express";
import { IUserRequest } from "../interfaces/IUserRequest";
import { CreateUserService } from "../services/CreateUserService";

export class CreateUserController{
    async handle(request: Request, response: Response){
        const { name, email, admin }: IUserRequest = request.body

        const createUserService = new CreateUserService()
        const user = await createUserService.execute({name, email, admin})

        return response.json(user)
    }
}