import AdoptionRepository from "../repositories/adoption.repository.js";
import UserRepository from "../repositories/user.repository.js";
import PetRepository from "../repositories/pet.repository.js";
import { ERROR_ALREADY_ADOPTED, NOT_FOUND_ID } from "../constants/messages.constant.js";


export default class AdoptionService{
    #adoptionRepository
    #petRepository
    #userRepository
    constructor(){
        this.#adoptionRepository = new AdoptionRepository();
        this.#petRepository = new PetRepository();
        this.#userRepository = new UserRepository();
    };

    async getAll(params){
        return await this.#adoptionRepository.getAll(params);
    };

    async findOneById(id){
        const adoption = await this.#adoptionRepository.getOneById(id);
        if(!adoption){
            throw new Error(NOT_FOUND_ID);
        };
        return adoption;
    };

    async createAdoption(data){
        const pet = await this.#petRepository.findOneById(data.pid)
        const user = await this.#userRepository.findOneById(data.oid)
        if(!pet || !user) throw new Error(NOT_FOUND_ID)
        if(pet.adopted) throw new Error(ERROR_ALREADY_ADOPTED)
        const petNewValues = {...pet, owner: data.oid, adopted: true};
        const userNewValues = {...user, pets: [...user.pets,data.pid]};
        await this.#petRepository.save(petNewValues);
        await this.#userRepository.save(userNewValues);
        return await this.#adoptionRepository.save(data);
    };

    async updateOneById(id,data){
        const adoption = await this.#adoptionRepository.getOneById(id);
        updatedValues = {...adoption,...data};
        return await this.#adoptionRepository.save(updatedValues);
    };

    async deleteOneById(id){
        return await this.#adoptionRepository.deleteOneById(id);
    };
}