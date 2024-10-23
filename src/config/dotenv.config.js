import dotenv from "dotenv";
import { paths } from "../utils/index.js";

export const config = () => {
    dotenv.config(paths.env);
};