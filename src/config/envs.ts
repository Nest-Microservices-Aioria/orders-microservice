import 'dotenv/config'
import Joi, * as joi from 'joi';

interface EnvVars {
    PORT: number;
    // PRODUCTS_MICROSERVICE_HOST: string,
    // PRODUCTS_MICROSERVICE_PORT: number,

    NATS_SERVERS: string[];
    
}

const envsSchema = joi.object({
    PORT : joi.number().required(),
    // PRODUCTS_MICROSERVICE_HOST: joi.string().required(),
    // PRODUCTS_MICROSERVICE_PORT: joi.number().required(),
    NATS_SERVERS: joi.array().items(joi.string()).required(),
})
.unknown(true);

const { error, value } = envsSchema.validate({
    ...process.env,
    NATS_SERVERS: process.env.NATS_SERVERS?.split(',')
});

if( error ) {
    throw new Error(`Config validation error: ${ error.message }`);
}

const envVar: EnvVars = value;

export const envs = {
    port: envVar.PORT,
    // products_microservice_host: envVar.PRODUCTS_MICROSERVICE_HOST,
    // products_microservice_port: envVar.PRODUCTS_MICROSERVICE_PORT,
    nats_servers:envVar.NATS_SERVERS,
}