import AdoptionService from "../services/adoption.service.js";

export default class AdoptionController{
    #adoptionService
    constructor(){
        this.#adoptionService = new AdoptionService();
    };

    async getAll(req,res) {
        try {
            const adoptions = await this.#adoptionService.getAll(req.params);
            res.sendSuccess200(adoptions);
        } catch (error) {
            res.sendError(error)
        };
    };
    async getOneById(req,res) {
        try {
            const {id} = req.params;
            const response = await this.#adoptionService.findOneById(id);
            res.sendSuccess200(response);
        } catch (error) {
            res.sendError(error)
        };
    };
    async createAdoption(req,res) {
        try {
            const response = await this.#adoptionService.createAdoption(req.params);
            res.sendSuccess201(response);
        } catch (error) {
            res.sendError(error)
        };
    };

    async deleteOneById(req,res) {
        try {
            const {id} = req.params
            const response = await this.#adoptionService.deleteOneById(id);
            res.sendSuccess200(response)
        } catch (error) {
            res.sendError(error)
        };
    };
}