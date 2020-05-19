const typeDefs = `
type Mutation {
    login(email_id: String!, password: String!): String!
}
type Query{
    hello(name: String): String!
    health:String!
    getUserByEmail(email_id:String!):[User!]!
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
`;

module.exports = typeDefs;
