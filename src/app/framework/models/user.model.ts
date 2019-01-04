export class User {
    email_id: string;
    name: string;
    password: string;
    constructor(email_id: string,
        password: string,
        name: string) {
        this.name = name;
        this.email_id = email_id;
        this.password = password;
    }
}
