import AdoptionService from "../services/adoption.service.js";

export default class AdoptionController{
    #adoptionService
    constructor(){
        this.#adoptionService = new AdoptionService();
    };

}