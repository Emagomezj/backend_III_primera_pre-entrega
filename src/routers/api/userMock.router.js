import BaseRouter from "../base.router.js";
import UserController from "../../controllers/user.controller.js";

export default class UserMockRouter extends BaseRouter {
    #userController;

    constructor() {
        super();
        this.#userController = new UserController();
    }

    initialize() {
        const router = this.getRouter();

        this.addGetRoute("/", [], (req, res) => this.#userController.mockingUsers(req,res));

        this.addPostRoute("/single",[],(req,res) => this.#userController.generateSingleUser(req,res))

        this.addPostRoute("/:amount", [], (req,res) => this.#userController.generate_n_Users(req,res,req.params.amount));

        router.use((err, req, res, next) => {
            res.sendError(err);
        });
    }
}