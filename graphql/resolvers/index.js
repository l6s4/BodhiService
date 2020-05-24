const fetch = require("node-fetch");
const baseURL = `http://localhost:3001/api/v1`;

const resolvers = {
    hello: () => {
        return "Hello World";
    },
    login: async args => {
        const loginResponse = await fetch(`${baseURL}/user/login`, {
            method: "POST",
            body: JSON.stringify({ "email_id": args.loginInput.email_id, "password": args.loginInput.password }),
            headers: { "Content-Type": "application/json" }
        }).then(res=>{
            return res.json();
        }).then(resData=>{
            if(resData.status!==200){
                throw new Error(resData.error)
            }
        })
        return loginResponse.json();
    },
    createUser: async args => {
        const createUserResponse = await fetch(`${baseURL}/user`, {
            method: "POST",
            body: JSON.stringify({
                "email_id": args.createUserInput.email_id,
                "password": args.createUserInput.password,
                "first_name": args.createUserInput.first_name,
                "last_name": args.createUserInput.last_name,
                "user_type": args.createUserInput.user_type,
                "dob": args.createUserInput.dob,
                "address": args.createUserInput.address,
                "contact_no": args.createUserInput.contact_no,
                "clinic_id": args.createUserInput.clinic_id
            }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": ""
            }
        });
        return createUserResponse.json();
    },
    getUserByEmail: async args => {
        const getUserByEmailResponse = await fetch(`${baseURL}/user/${args.email_id}`);
        return getUserByEmailResponse.json();
    }
}
module.exports = resolvers;
