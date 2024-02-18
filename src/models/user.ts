

export class User {

    public firstname: string;
    public lastname: string;

    constructor(firstname: string = "", name: string = "") {
        this.firstname = firstname;
        this.lastname = name;
    }

    loadFromJson(json: any) {
        Object.assign(this, json)
    }

}