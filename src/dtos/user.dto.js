import { hasher } from "../utils";


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
        return {
            id: data.id || null,
            name: data.name,
            surname: data.surname,
            email: data.email,
            password: data.password ? hasher(password) : null,
            roles: data.roles,
            pets: data.pets || null
        }
    }
}