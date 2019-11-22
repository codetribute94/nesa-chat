class Users {
    firstName;
    lastName;
    userName;
    email;


    constructor(firstName, lastName, userName, email) {
        this.firstName = firstName,
            this.lastName = lastName,
            this.userName = userName,
            this.email = email
    }

    /**
     * Setter for firstName property
     * @param {string} firstName
     */
    set firstName(firstName) {
        if (typeof firstName === "string") {
            this.firstName = firstName;
        } else {
            throw new Error("type must be a string")
        }
    }

     /**
     * Setter for firstName property
     * @param {string} lastName
     */

    set lastName(lastName) {
        if (typeof lastName === "string") {
            this.lastName = lastName;
        } else {
            throw new Error("type must be a string")
        }
    }

     /**
     * Setter for firstName property
     * @param {string} userName
     */

    set userName(userName) {
        if (typeof userName === "string") {
            this.userName = userName;
        } else {
            throw new Error("type must be a string")
        }
    }

     /**
     * Setter for firstName property
     * @param {string} email
     */

    set email(email) {
        if (typeof email === "string") {
            this.email = email;
        } else {
            throw new Error("type must be a string")
        }
    }
}