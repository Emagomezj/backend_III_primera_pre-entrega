import { toBoolean } from "../utils/index.js";
import { PetDTO } from "../dtos/pet.dto.js";
import FactoryDAO from "../daos/factory.dao.js";
import { NOT_FOUND_ID } from "../constants/messages.constant.js";

export default class PetRepository{
    #petDAO
    #petDTO
    constructor(){
        const factory = new FactoryDAO();
        this.#petDAO = factory.petDAO();
        this.#petDTO = new PetDTO()
    };

    async getAll(params){
        params.populate = "owner";

        const $and = [];

        if(params?.name){
            $and.push({name: {$regex: params.name, $options: "i"}})
        }

        if(params?.adopted){
            const value = toBoolean(params.adopted)
            $and.push({adopted: {$eq: value}})
        }

        const filters = $and.length > 0 ? {$and} : {};
        const pets = await this.#petDAO.getAll(filters, params);
        const formatedPets = pets?.docs?.map((pet) => this.#petDTO.model(pet))
        pets.docs = formatedPets;
        return pets
    };

    async getOneById(id){
        const pet = await this.#petDAO.getOneById(id, "owner");

        return this.#petDTO.model(pet)
    };

    async save(data){
        const formatedData = this.#petDTO.data(data);
        const pet = await this.#petDAO.save(formatedData);
        return pet
    };

    async deleteOneById(id){
        const pet = this.getOneById(id);
        if(!pet) throw new Error(NOT_FOUND_ID)
        await this.#petDAO.deleteOneById(id)
        return this.#petDTO.model(pet)
    };
}