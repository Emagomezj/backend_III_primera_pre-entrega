import mongoose, { Schema, model } from "mongoose";
import paginate from "mongoose-paginate-v2";

const petSchema = new Schema({
    name: {
        type: String,
        required: [true, "El nombre de la mascota es obligatorio"]
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
        type: String
    },
},{
    timestamps: true
})

petSchema.plugin(paginate);

const Pet = model('pets', petSchema);

export default Pet
