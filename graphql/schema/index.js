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
input CreateBookingInput{
    patient_email_id:String!
    clinic_id:String!
    doctor_id:String!
    time_slot:String
    status:String!
}
type CreateBookingOutput{
    bookedStatus:String!
}
type deleteUserOutput{
    deleted:Boolean!
}
type Health{
    status: String!
    start_up_time: String!
    VERSION: String!
}
type ClinicNames{
    key:String!,
    id:String!
}
type Clinic{
    _id:String!,
    name: String!,
    email_id:String!,
    street:String!,
    city:String!,
    postcode:Int!
    contact_no:String!,
    about:String!
    doctors: [Doctor!]!
}
type Doctor{
    _id:String!,
    first_name:String!,
    last_name:String!,
    joining_date:String!,
    address:String!,
    contact_no:String!,
    about:String!
    schedule:String!
}
type TimeSlot{
    doctor_id:String!,
    time_slot:String!
}
type Bookings{
    email_id:String!,
    clinic_name:String!,
    doctor_name:String!,
    time_slot:String!,
    status:String!
}
type RootQuery {
    health:Health!
    getUserByEmail(email_id:String!):User
    getClinicByName(clinic_name:String!):[ClinicNames!]!
    getClinicById(clinic_id:String!):Clinic!
    getSchedule(clinic_id:String!,given_date:String!):[TimeSlot!]!
    getMyBookings(email_id:String!):[Bookings!]!
}
type RootMutation {
    login(loginInput:LoginInput): LoginInfo!
    createUser(createUserInput:CreateUserInput):CreateUserOutput!
    updateUser(updateUserInput:UpdateUserInput):UpdateUserOutput!
    deleteUser(email_id:String!):deleteUserOutput
    createBooking(createBookingInput:CreateBookingInput):CreateBookingOutput!
}
schema {
    query: RootQuery
    mutation: RootMutation
}
`)

module.exports = schema;
