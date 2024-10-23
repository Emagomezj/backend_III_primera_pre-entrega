import { hasher } from "../utils/index.js";


export class UserDTO{
    model(user){
        return {
            name: user.name,
            surname: user.surname,
            email: user.email,
            roles: user.roles,
            pets: user.pets
        }
    }

    data(data){
        console.log(data)
        return {
            id: data.id || null,
            name: data.name,
            surname: data.surname,
            email: data.email,
            password: data.password ? hasher(data.password) : null,
            roles: data.roles,
            pets: data.pets || null
        }
    }
}