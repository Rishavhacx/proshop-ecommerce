import bcrypt from "bcryptjs";

const users = [
    {
        name: "Admin User",
        email: "admin@email.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true,
    },
    {
        name: "John Doe",
        email: "joh@email.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: false, 
    },
    {
        name: "Jane Doe",
        email: "jane@email.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: false,
    },
    {
        name: "Alice Smith",
        email: "alice@email.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: false,
    },
];

export default users;