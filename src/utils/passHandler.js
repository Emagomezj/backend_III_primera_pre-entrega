import bcrypt from "bcrypt";

export const hasher = (password) => {
    password = String(password)
    const salt = bcrypt.genSaltSync(15);
    return bcrypt.hashSync(password, salt);
};

export const passwordValidator = (password, hash) => {
    password = String(password);
    return bcrypt.compareSync(password, hash);
};