const fetch = require('node-fetch');
const baseURL = `http://localhost:3001/api/v1`;
const resolvers = {
    Query: {
        hello: () => "Hello World",
        health: async (_) => {
            const response = await fetch(`${baseURL}/health`);
            console.log(`Health Response::${JSON.stringify(response)}`);
            return response.json();
        },
        getUserByEmail: async (_, { email_id }) => {
            const response = await fetch(`${baseURL}/user/${email_id}`);
            return response.json();
        },
    },
    Mutation: {
        login: async (_, { email_id, password }) => {
            const response = await fetch(`${baseURL}/user/login`, {
                method: "POST",
                body: JSON.stringify({ "email_id": email_id, "password": password }),
                headers: { 'Content-Type': 'application/json' }
            });
            return response.text();
        }
    }
}
module.exports = resolvers;
