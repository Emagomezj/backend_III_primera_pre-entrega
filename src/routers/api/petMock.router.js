import BaseRouter from "../base.router.js";
import PetController from "../../controllers/pet.controller.js";

export default class PetMockRouter extends BaseRouter {
    #petController;

    constructor() {
        super();
        this.#petController = new PetController();
    }

    initialize() {
        const router = this.getRouter();

        this.addPostRoute("/single",[],(req,res) => this.#petController.generateSinglePet(req,res))

        this.addPostRoute("/:amount", [], (req,res) => this.#petController.generate_n_pets(req,res,req.params.amount));

        router.use((err, req, res, next) => {
            res.sendError(err);
        });
    }
}