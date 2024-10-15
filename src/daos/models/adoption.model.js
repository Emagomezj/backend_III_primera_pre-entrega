import mongoose from "mongoose";
import { Schema, model } from "mongoose";
import paginate from "mongoose-paginate-v2";

const adoptionSchema = new Schema({
    owner: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'users'
    },
    pet: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'pets'
    }
}, {
    timestamps: true
});

adoptionSchema.plugin(paginate);

const Adoption = model('adoptions', adoptionSchema);

export default Adoption;