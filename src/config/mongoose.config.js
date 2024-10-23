import { connect } from "mongoose";

export const connectDB = async () => {
    try {
        await connect(process.env.MongoURI || "");
        console.log("Conectado a MongoDB");
    } catch (error) {
        console.error("Error al conectar con MongoDB", error);
    }
};

