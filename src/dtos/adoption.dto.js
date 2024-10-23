import moment from "moment";
import {UserDTO} from "./user.dto.js";
import {PetDTO} from "./pet.dto.js"
import { BAD_REQUEST } from "../constants/messages.constant.js";

export class AdoptionDTO {
    #userDTO;
    #petDTO;
    constructor(){
        this.#userDTO = new UserDTO();
        this.#petDTO = new PetDTO();
    }
    model(adoption){
        return {
            owner: this.#userDTO.model(adoption.owner),
            pet: this.#petDTO.model(adoption.pet),
            adoptionDate: moment(adoption.createdAt).format('DD-MM-YYYY')
        }
    }

    data(data){
        if(!data?.owner || !data?.pet) throw new Error(BAD_REQUEST)
        return {
            owner: data.oid,
            pet: data.pid
        }
    }
}