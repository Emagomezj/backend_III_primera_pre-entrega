import UserService from "../services/user.service.js";
import { generateUsersMock, generateSingleUser } from "../utils/index.js";

export default class UserController{
    #userService
    constructor(){
        this.#userService = new UserService();
    }

    async mockingUsers(req,res) {
        try {
            const users = generateUsersMock(50);
            const response = await this.#userService.insertMany(users);
            res.sendSuccess201(response);
        } catch (error) {
            res.sendError(error);
        };
    };

    async generate_n_Users(req,res,amount) {
        try {
            const users = generateUsersMock(amount);
            const response = await this.#userService.insertMany(users);
            res.sendSuccess201(response);
        } catch (error) {
            res.sendError(error);
        };
    };

    async generateSingleUser(req,res) {
        try {
            const user = generateSingleUser();
            const response = await this.#userService.createUser(user);
            res.sendSuccess201(response);
        } catch (error) {
            res.sendError(error)
        }
    }
}