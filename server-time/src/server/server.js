const path = require('path');

module.exports = async function(fastify, opts){
    fastify.register(require('fastify-static'), {
        root: path.join(__dirname, '..', 'ui')
    })

    fastify.get('/api/time', async(request, reply)=> {
        return {time: new Date().toISOString()}
    })
}