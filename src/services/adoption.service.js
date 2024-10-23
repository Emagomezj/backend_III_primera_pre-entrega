import AdoptionRepository from "../repositories/adoption.repository.js";
import { NOT_FOUND_ID } from "../constants/messages.constant.js";


export default class AdoptionService{
    #adoptionRepository
    constructor(){
        this.#adoptionRepository = new AdoptionRepository();
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
        return await this.#adoptionRepository.save(data);
    };

    async updateOneById(id,data){
        const adoption = await this.#adoptionRepository.getOneById(id);
        updatedValues = {...adoption,...data};
        return await this.#adoptionRepository.save(updatedValues);
    };

    async deleteOneById(id){
        return await this.#adoptionRepository.deleteOneById(id)
    }
}