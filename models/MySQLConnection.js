class MySQLConnection {
    #_url;
    #_user;
    #_password;
    #_instance = new MySQLConnection();



    get instance() {
        return this.#_instance;
    }

    get url() {
        return this.#_url;
    }

    set url(value) {
        this.#_url = value;
    }

    get user() {
        return this.#_user;
    }

    set user(value) {
        this.#_user = value;
    }

    get password() {
        return this.#_password;
    }

    set password(value) {
        this.#_password = value;
    }
}