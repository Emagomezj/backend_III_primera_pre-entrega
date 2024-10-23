import bcrypt from "bcrypt";

export const hasher = (password) => {
    const pwd = String(password)
    const salt = bcrypt.genSaltSync(15);
    return bcrypt.hashSync(pwd, salt);
};

export const passwordValidator = (password, hash) => {
    const pwd = String(password);
    return bcrypt.compareSync(pwd, hash);
};