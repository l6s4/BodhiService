const fetch = require("node-fetch");
const userURL = `http://localhost:3001/api/v1`;
const clinicUrl = `http://localhost:3002/api/v1`;
const bookingUrl = `http://localhost:3003/api/v1`;
const time = new Date();
const resolvers = {
    health: async () => {
        return Promise.resolve({ "status": "OK", "start_up_time": time.toISOString(), "VERSION": "1.0.0" });
    },
    login: async args => {
        const loginResponse = await fetch(`${userURL}/user/login`, {
            method: "POST",
            body: JSON.stringify({ "email_id": args.loginInput.email_id, "password": args.loginInput.password }),
            headers: { "Content-Type": "application/json" }
        }).then(throwOnFailure);
        return loginResponse.json();
    },
    createUser: async args => {
        const createUserResponse = await fetch(`${userURL}/user`, {
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
        }).then(throwOnFailure);
        return createUserResponse.json();
    },
    getUserByEmail: async (args, req) => {
        //console.log(`req:${JSON.stringify(req.headers.authorization)}`);
        const getUserByEmailResponse = await fetch(`${userURL}/user/${args.email_id}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": req.headers.authorization
            }
        }).then(throwOnFailure);
        return getUserByEmailResponse.json();
    },
    updateUser: async (args, req) => {
        const updateUserResponse = await fetch(`${userURL}/user`, {
            method: "PUT",
            body: JSON.stringify({
                "email_id": args.updateUserInput.email_id,
                "password": args.updateUserInput.password,
                "first_name": args.updateUserInput.first_name,
                "last_name": args.updateUserInput.last_name,
                "dob": args.updateUserInput.dob,
                "address": args.updateUserInput.address,
                "contact_no": args.updateUserInput.contact_no
            }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": req.headers.authorization
            }
        }).then(throwOnFailure);
        return updateUserResponse.json();
    },
    getClinicByName: async (args, req) => {
        const getClinicByNameResponse = await fetch(`${clinicUrl}/clinic/readFromCache/${args.clinic_name}`, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(throwOnFailure);
        return getClinicByNameResponse.json();
    },
    getClinicById: async (args, req) => {
        const getClinicByIdResponse = await fetch(`${clinicUrl}/clinic/id/${args.clinic_id}`, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(throwOnFailure);
        return getClinicByIdResponse.json();
    },
    getSchedule: async (args, req) => {
        const getScheduleResponse = await fetch(`${bookingUrl}/booking/load/loadSchedule/${args.clinic_id}/${args.given_date}`, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(throwOnFailure);
        return getScheduleResponse.json();
    },
    createBooking: async (args, req) => {
        console.log(`input:${args.createBookingInput.patient_email_id}`);
        const createBookingResponse = await fetch(`${bookingUrl}/booking/`, {
            method: "POST",
            body: JSON.stringify({
                "patient_email_id": args.createBookingInput.patient_email_id,
                "clinic_id": args.createBookingInput.clinic_id,
                "doctor_id": args.createBookingInput.doctor_id,
                "time_slot": args.createBookingInput.time_slot,
                "status": args.createBookingInput.status,
            }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": req.headers.authorization
            }
        }).then(throwOnFailure);
        return createBookingResponse.json();
    },
    getMyBookings: async (args, req) => {
        const getMyBookingsResponse = await fetch(`${bookingUrl}/booking/viewBooking/${args.email_id}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": req.headers.authorization
            }
        }).then(throwOnFailure);
        return getMyBookingsResponse.json();
    },
}
async function throwOnFailure(resData) {
    if (resData.status !== 200 && resData.status !== 201) {
        throw new Error((await resData.json()).error);
    }
    return resData;
}
module.exports = resolvers;
