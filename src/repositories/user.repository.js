import { UserDTO } from "../dtos/user.dto.js";
import FactoryDAO from "../daos/factory.dao.js";
import { passwordValidator } from "../utils/index.js";
import { NOT_FOUND_CREDENTIALS, NOT_FOUND_ID } from "../constants/messages.constant.js";

export default class UserRepository{
    #userDAO
    #userDTO
    constructor(){
        const factory = new FactoryDAO();
        this.#userDAO = factory.userDAO();
        this.#userDTO = new UserDTO();
    };

    async getAll(params){
        params.populate = "pets"

        const $and = [];

        if(params?.name) {
            $and.push({name: {$regex: params.name, $options: "i"}})
        }
        if(params?.surname) {
            $and.push({surmane: {$regex: params.surname, $options: "i"}})
        };
        if(params?.roles){
            $and.push({roles: {$in:[...params.roles]}})
        };

        const filters = $and.length > 0 ? {$and} : {};

        const users = await this.#userDAO.getAll(filters, params);
        const formatedUsers = users?.docs?.map((user) => this.#userDTO.model(user));

        users.docs = formatedUsers;

        return users;
    };
    async getOneById(id){
        const user = await this.#userDAO.getOneById(id, "pets");
        
        return this.#userDTO.model(user);
    };
    async findOneByEmailAndPassword(email, password){
        const user = await this.#userDAO.findOneByCriteria({email})
        if(!user){
            throw new Error(NOT_FOUND_CREDENTIALS)
        };
        const hash = user.password
        if(!passwordValidator(password, hash)){
            throw new Error(NOT_FOUND_CREDENTIALS)
        };
        return this.#userDTO.model(user);
    };
    async save(data) {
        const formatedData = this.#userDTO.data(data);
        const user = await this.#userDAO.save(formatedData)

        return this.#userDTO.model(user);
    };

    async deleteOneById(id){
        const user = await this.getOneById(id);
        if(!user) throw new Error(NOT_FOUND_ID)
        await this.#userDAO.deleteOneById(id);
        return this.#userDTO.model(user);
    };
}