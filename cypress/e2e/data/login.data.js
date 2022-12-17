module.exports = 
    [
        {
            user: "valid",
            email: "janetmrodgers@gmail.com",
            password: "Dryck$t3r",
            expectedUrl: "https://ui-automation-camp.vercel.app/products"
        },
        {
            user: "blank",
            email: "",
            password: "Dryck$t3r",
            message: "Email can't be blank",
        },
        {
            user: "invalid",
            email: "rodgersdryck",
            password: "Dryck$t3r",
            message: "Email is invalid"
        }
    ]
;