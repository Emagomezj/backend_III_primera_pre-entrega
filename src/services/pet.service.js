import PetRepository from "../repositories/pet.repository.js";
import { NOT_FOUND_ID } from "../constants/messages.constant.js";


export default class PetService{
    #petRepository
    constructor(){
        this.#petRepository = new PetRepository();
    };

    async getAll(params){
        return await this.#petRepository.getAll(params);
    };

    async findOneById(id){
        const pet = await this.#petRepository.getOneById(id);
        if(!pet){
            throw new Error(NOT_FOUND_ID);
        };
        return pet;
    };

    async createPet(data){
        return await this.#petRepository.save(data);
    };

    async insertMany(data){
        const pets = []
        for(const pet of data){
            const newPet = await this.#petRepository.save(pet)
            pets.push(newPet)
        }
        return pets;
    }

    async updateOneById(id,data){
        const pet = await this.#petRepository.getOneById(id);
        updatedValues = {...pet,...data};
        return await this.#petRepository.save(updatedValues);
    };

    async deleteOneById(id){
        return await this.#petRepository.deleteOneById(id)
    }
}