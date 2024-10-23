import User from "./models/user.model.js";
import Pet from "./models/pet.model.js";
import Adoption from "./models/adoption.model.js";
import BaseDAO from "./base.dao.js";

export default class FactoryDAO {
    userDAO() {
        return new BaseDAO(User, "pets");
    }

    petDAO() {
        return new BaseDAO(Pet, "owner");
    }

    adoptionDAO() {
        return new BaseDAO(Adoption)
    }
}