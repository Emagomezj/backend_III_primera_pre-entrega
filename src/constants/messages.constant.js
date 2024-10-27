export const NOT_FOUND = "Elemento no encontrado";
export const NOT_PRIVILEGES = "No tiene los suficientes privilegios";
export const NOT_FOUND_ID = "No se ha encontrado el ID referenciado";
export const NOT_FOUND_CREDENTIALS = "No se han encontrado usuarios con los datos ingresados";
export const BAD_REQUEST = "Error en la sintaxis o los datos ingresados";
export const ERROR_SERVER = "Hubo un error en el Servidor" ;
export const ERROR_NOT_FOUND_URL = "URL no encontrada" ;
export const ERROR_ALREADY_ADOPTED = "La mascota ya ha sido adoptada por otro usuario"

export const ERROR_INVALID_ID = "ID inválido" ;
export const ERROR_NOT_FOUND_ID = "ID no encontrado" ;
export const ERROR_NOT_FOUND_INDEX = "Índice no encontrado" ;

export const ERROR_INVALID_TOKEN = "Token inválido" ;
export const ERROR_EXPIRED_TOKEN = "Token expirado" ;
export const ERROR_NOT_FOUND_TOKEN = "Token no encontrado" ;
export const ERROR_NOT_HAVE_PRIVILEGES = "No tenes los privilegios suficientes" ;

export const JWT_TRANSLATIONS = {
    ["No auth token"]: ERROR_NOT_FOUND_TOKEN,
    ["jwt malformed"]: ERROR_INVALID_TOKEN,
    ["invalid algorithm"]: ERROR_INVALID_TOKEN,
    ["invalid token"]: ERROR_INVALID_TOKEN,
    ["invalid signature"]: ERROR_INVALID_TOKEN,
    ["jwt expired"]: ERROR_EXPIRED_TOKEN,
};

export const STATUS_CODES = {
    [ERROR_INVALID_ID]: 400,
    [NOT_FOUND_CREDENTIALS]: 401,
    [ERROR_NOT_FOUND_TOKEN]: 401,
    [ERROR_INVALID_TOKEN]: 401,
    [ERROR_EXPIRED_TOKEN]: 401,
    [ERROR_NOT_HAVE_PRIVILEGES]: 403,
    [ERROR_NOT_FOUND_ID]: 404,
    [NOT_FOUND]: 404,
    [ERROR_NOT_FOUND_INDEX]: 404,
    [ERROR_ALREADY_ADOPTED]: 409,
};