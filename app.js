const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql");
const schema = require("./graphql/schema/index");
const resolvers = require("./graphql/resolvers/index");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(
  "/graphql",
  graphqlHttp({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
  })
);

app.listen(4000);