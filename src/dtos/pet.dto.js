import { toBoolean } from "../utils"

export class PetDTO{
    data(data){
        return {
            id: data.id || null,
            name: data.name,
            adopted: toBoolean(data.adopted),
            birthDate: data.birthDate || '01-01-0001',
            owner: data.oid || null,
            thumbnail: data.thumbnail || null
        }
    }
}