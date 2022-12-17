module.exports = 
    [
        {
            user: "valid",
            firstname: "Andryck",
            lastname: "Rodgers",
            email: "rodgersdryck@gmail.com",
            subject: "Test subject",
            message: "This is a test message"
        },
        {
            user: "invalid",
            firstname: "Andryck",
            lastname: "Rodgers",
            email: "rodgersdryc",
            subject: "Test subject",
            message: "This is a test message"
        },
        {
            user: "no_email",
            firstname: "Andryck",
            lastname: "Rodgers",
            email: "{backspace}",
            subject: "Test subject",
            message: "This is a test message"
        },
    ]
;