import mongoose, { Schema, model } from "mongoose";
import paginate from "mongoose-paginate-v2";
import { paths } from "../../utils/index.js";

const petSchema = new Schema({
    name: {
        type: String,
        required: [true, "El nombre de la mascota es obligatorio"]
    },
    specie: {
        type: String,
        required: [true, "La especie de la mascota es obligatoria"]
    },
    adopted: {
        type: Boolean,
        default: false
    },
    birthDate: {
        type: Date,
    },
    owner: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'users'
    },
    thumbnail: {
        type: String,
        default: "default_pet.svg"
    },
},{
    timestamps: true
})

petSchema.plugin(paginate);

const Pet = model('pets', petSchema);

export default Pet
