export class AdoptionDTO {
    model(adoption){
        return {
            owner: adoption.owner,
            pet: adoption.pet,
            adoptionDate: adoption.createdAt
        }
    }

    data(data){
        return {
            owner: data.oid,
            pet: data.pid
        }
    }
}