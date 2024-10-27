import { AdoptionDTO } from "../dtos/adoption.dto.js"
import FactoryDAO from "../daos/factory.dao.js";
import { NOT_FOUND_ID } from "../constants/messages.constant.js";


export default class AdoptionRepository{
    #adoptionDAO
    #adoptionDTO
    constructor(){
        const factory = new FactoryDAO();;
        this.#adoptionDAO = factory.adoptionDAO();
        this.#adoptionDTO = new AdoptionDTO();
    };

    async getAll(params){
        params.populate = ["owner","pet"];

        const $and = [];

        if(params?.owner){
            $and.push({owner: {$eq: params.oid}})
        };
        if(params?.pet){
            $and.push({pet: {$eq: params.pid}})
        };
        const filters = $and.length > 0 ? {$and} : {}
        const adoptions = await this.#adoptionDAO.getAll(filters, params);
        const formatedDocs = adoptions?.docs?.map(adoption => {
            this.#adoptionDTO.model(adoption)
        });
        adoptions.docs = formatedDocs;

        return adoptions
    };

    async getOneById(id) {
        const adoption = await this.#adoptionDAO(id, ["owner","pet"]);

        return this.#adoptionDTO.model(adoption)
    };

    async save(data){
        const formatedData = this.#adoptionDTO.data(data);
        const adoption = await this.#adoptionDAO.save(formatedData);
        return adoption
    };

    async deleteOneById(id){
        const adoption = await this.#adoptionDAO.getOneById(id);
        if(!adoption) throw new Error(NOT_FOUND_ID)
        await this.#adoptionDAO.deleteOneById(id);
        return this.#adoptionDTO.model(adoption);
    };
}