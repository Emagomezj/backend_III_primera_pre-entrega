import BaseRouter from "../base.router";
import AdoptionController from "../../controllers/adoption.controller";

export default class AdoptionRouter extends BaseRouter{
    #adoptionController
    constructor(){
        super();
        this.#adoptionController = new AdoptionController();
    }

    
}