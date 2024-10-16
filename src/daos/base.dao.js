import { NOT_FOUND } from "../constants/messages.constant"

export default class BaseDAO{
    #model

    constructor(model, field){
        this.#model = model
        const field = field ?? null
    }

    async getAll(filters, params, field){
        const sort = {
            asc: field ? {field: 1} : {name: 1},
            desc: field ? {field: -1} : {name: -1}
        }
        const options = {
            limit: params?.limit ?? 5,
            page: params?.page ?? 1,
            sort: sort[params?.sort] ?? {},
            populate: params?.populate ?? "",
            lean: true,
        }
        return await this.#model.paginate(filters, options)
    }

    async getOneById(id){
        return await this.#model.findById(id)
    }

    async findOneByCriteria(criteria){
        return await this.#model.find(criteria)
    }

    async findByCriteria(criteria){
        return await this.#model.find(criteria)
    }

    async save(data){
        let object
        if(data.id){
            object = await this.#model.findById(data.id);
            if (object) {
                Object.keys(data).forEach((key) => {
                    if (data[key] !== undefined && data[key] !== null) {
                        object[key] = data[key];
                    }
                });
            }
        } else {
            object = new this.#model(data);
        }
        return object.save()
    }

    async deleteOneById(id){
        return await this.#model.deleteOne({ _id: id });
    }

    async updateField(data){
        const object = await this.#model.findById(data.id)
        if(!object){
            throw new Error(NOT_FOUND);   
        }
        if(field === "pets"){
            object.field.push(data.pid)
        } else {
            object.field = data.oid
        }

        return await object.save()
    }
}