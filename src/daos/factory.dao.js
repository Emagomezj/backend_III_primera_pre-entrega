import User from "./models/user.model";
import Pet from "./models/pet.model";
import Adoption from "./models/adoption.model";
import BaseDAO from "./base.dao";

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