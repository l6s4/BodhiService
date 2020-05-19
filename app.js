const typeDefs = require("./graphql/schema/index_typeDefs")
const resolvers = require("./graphql/resolvers/index_resolvers")
const { GraphQLServer } = require('graphql-yoga');
const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log(`Server is running on http://localhost:4000`))


// app.use("/graphql", graphqlHttp({
//     schema: graphqlSchema,
//     rootValue: graphqlResolvers,
//     graphiql: true
// }))

// app.listen(3000);