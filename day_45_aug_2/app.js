const { ApolloServer } = require('apollo-server');
const schemaObj = require('./employee-schema')

const server = new ApolloServer({
    typeDefs: schemaObj.typeDefs,
    resolvers: schemaObj.resolvers,
});

server.listen({ port: 5000 }).then(() => { console.log('server running fine') });