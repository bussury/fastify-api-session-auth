  
'use strict'
import fp from 'fastify-plugin';
import fastifyJwt from '@fastify/jwt'
/**
 * @param {import('fastify').FastifyInstance} fastify 
 */
async function appAuthentication(fastify,opts)  {
    fastify.decorate('authenticate', async function (request, reply){
        try {
            if(!request.session.userId){
                
            }
        } catch (error) {
            
        }
    })
    fastify.decorate('authorize', async function () {

    })
   
}

export default fp(appAuthentication)