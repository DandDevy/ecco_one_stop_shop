class User {
    #email;
    #userName;
    #password;

    constructor(email, userName, password) {
        this.#email = email;
        this.#userName = userName;
        this.#password = password;
        this._email = email;
        this._userName = userName;
        this._password = password;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get userName() {
        return this._userName;
    }

    set userName(value) {
        this._userName = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }
}