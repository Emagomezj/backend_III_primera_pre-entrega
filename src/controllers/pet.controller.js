import PetService from "../services/pet.service.js";
import { generatePetsMock,generateSinglePet } from "../utils/index.js";

export default class PetController{
    #petService
    constructor(){
        this.#petService = new PetService();
    }

    async generateSinglePet(req,res){
        try {
            const pet = generateSinglePet();
            const response = await this.#petService.createPet(pet);
            res.sendSuccess201(response);
            
        } catch (error) {
            res.sendError(error);
        };
    };

    async generate_n_pets(req,res,amount){
        try {
            const pets = generatePetsMock(amount);
            const response = await this.#petService.insertMany(pets);
            res.sendSuccess201(response);
        } catch (error) {
            res.sendError(error);
        };
    }
}