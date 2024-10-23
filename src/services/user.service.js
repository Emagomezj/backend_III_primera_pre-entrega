import UserRepository from "../repositories/user.repository.js";
import { NOT_FOUND_ID } from "../constants/messages.constant.js";


export default class UserService{
    #userRepository
    constructor(){
        this.#userRepository = new UserRepository();
    };

    async getAll(params){
        return await this.#userRepository.getAll(params);
    };

    async findOneById(id){
        const user = await this.#userRepository.getOneById(id);
        if(!user){
            throw new Error(NOT_FOUND_ID);
        };
        return user;
    };

    async findOneByEmailAndPassword(email,password){
        const user = await this.#userRepository.findOneByEmailAndPassword(email, password);

        return user;
    };

    async createUser(data){
        return await this.#userRepository.save(data);
    };

    async insertMany(data){
        const users = await Promise.all(data.map(u => this.#userRepository.save(u)));
        return users;
    }

    async updateOneById(id,data){
        const user = await this.#userRepository.getOneById(id);
        updatedValues = {...user,...data};
        return await this.#userRepository.save(updatedValues);
    };

    async deleteOneById(id){
        return await this.#userRepository.deleteOneById(id)
    }
}