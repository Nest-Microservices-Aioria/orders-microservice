import 'dotenv/config'
import Joi, * as joi from 'joi';

interface EnvVars {
    PORT: number;
    PRODUCTS_MICROSERVICE_HOST: string,
    PRODUCTS_MICROSERVICE_PORT: number,

    
}

const envsSchema = joi.object({
    PORT : joi.number().required(),
    PRODUCTS_MICROSERVICE_HOST: joi.string().required(),
    PRODUCTS_MICROSERVICE_PORT: joi.number().required(),
})
.unknown(true);

const { error, value } = envsSchema.validate( process.env );

if( error ) {
    throw new Error(`Config validation error: ${ error.message }`);
}

const envVar: EnvVars = value;

export const envs = {
    port: envVar.PORT,
    products_microservice_host: envVar.PRODUCTS_MICROSERVICE_HOST,
    products_microservice_port: envVar.PRODUCTS_MICROSERVICE_PORT,
}