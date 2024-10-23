import { toBoolean } from "../utils/index.js"

export class PetDTO{
    model(model){
        return {
            id: model.id,
            name: model.name,
            specie: model.specie,
            birthDate: data.birthDate,
            owner: {
                id: model.owner.id,
                name: model.owner.name,
                surname: model.owner.surname
            },
            thumbnail: model.thumbnail
        }
    };

    data(data){
        return {
            id: data.id || null,
            name: data.name,
            specie: data.specie,
            adopted: toBoolean(data.adopted),
            birthDate: data.birthDate || '01-01-2000',
            owner: data.oid || null,
            thumbnail: data.thumbnail || null
        }
    };
}