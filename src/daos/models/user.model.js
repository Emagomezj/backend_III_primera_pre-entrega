import mongoose, { Schema, model } from "mongoose";
import paginate from "mongoose-paginate-v2";
import { USER } from "../../constants/roles.constant.js";

const userSchema = new Schema({
    name: {
        type: String,
        uppercase: true,
        required: [true, "El nombre es obligatorio"],
        minLength: [3, "El nombre debe tener al menos tres caracteres"],
        maxLength: [20, "El nombre no puede tener más de 20 caracteres"]
    },
    surname: {
        type: String,
        uppercase: true,
        required: [true, "El apellido es obligatorio"],
        minLength: [3, "El apellido debe tener al menos tres caracteres"],
    },
    email: {
        type: String,
        required: [true, "El email es obligatorio"],
        lowercase: true,
        trim: true,
        unique: true,
        match: /^[a-zA-z0-9._+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/
    },
    password: {
        type: String,
        required: [true, "la contraseña es obligatoria"],

    },
    roles: {
        type: [String],
        uppercase: true,
        default: [USER],
    },
    pets: [{
        type: mongoose.Types.ObjectId,
        ref: "pets"
    }]
}, {
    timestamps: true,
})

userSchema.plugin(paginate)

const User = model("users", userSchema);

export default User;