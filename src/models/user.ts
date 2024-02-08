

export class User {
    private _firstname: string;
    private _name: string;
    private _email: string;

    public get firstname() : string {
        return this._firstname;
    }
    
    public get name() : string {
        return this._name;
    }
    
    public get email() : string {
        return this._email
    }
    

    constructor(firstname: string, name: string, email: string) {
        this._email = email;
        this._firstname = firstname;
        this._name = name;
    }
}