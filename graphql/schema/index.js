const { buildSchema } = require("graphql");

const schema = buildSchema(`

input LoginInput{
    email_id: String!
    password: String!
}
type LoginInfo{
    token:String
    email_id:String
    first_name:String
    last_name:String
    message:String
}
input CreateUserInput{
    email_id: String!
    password:String!
    first_name:String!
    last_name:String!
    user_type:String!
    dob:String!
    address:String!
    contact_no:String!
}
type CreateUserOutput{
    status:String
    email_id:String
    user_type:String
    message:String
}
type User{
    email_id: String!
    password:String!
    first_name:String!
    last_name:String!
    user_type:String!
    dob:String!
    address:String!
    contact_no:String!
}
type RootQuery {
    hello(name: String): String!
    health:String!
    getUserByEmail(email_id:String!):[User!]!
}
type RootMutation {
    login(loginInput:LoginInput): LoginInfo!
    createUser(createUserInput:CreateUserInput):CreateUserOutput!
}
schema {
    query: RootQuery
    mutation: RootMutation
}
`)

module.exports = schema;
