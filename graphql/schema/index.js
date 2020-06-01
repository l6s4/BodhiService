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
    clinic_id:String
}
type CreateUserOutput{
    email_id:String
    user_type:String
}
type User{
    email_id: String
    password:String
    first_name:String
    last_name:String
    dob:String
    address:String
    contact_no:String
}
input UpdateUserInput{
    email_id: String!
    password:String
    first_name:String!
    last_name:String!
    dob:String!
    address:String!
    contact_no:String!
}
type UpdateUserOutput{
    updated:Boolean!
}
type Health{
    status: String!
    start_up_time: String!
    VERSION: String!
}
type RootQuery {
    health:Health!
    getUserByEmail(email_id:String!):User
}
type RootMutation {
    login(loginInput:LoginInput): LoginInfo!
    createUser(createUserInput:CreateUserInput):CreateUserOutput!
    updateUser(updateUserInput:UpdateUserInput):UpdateUserOutput!
}
schema {
    query: RootQuery
    mutation: RootMutation
}
`)

module.exports = schema;
