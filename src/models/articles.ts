
/**
 * Type pour la liste d'article
 */
export type Articles = Article[];


export class Article {

    private _id: string;

    private _name: string;

    private _description: string;

    private _default_price: number;

    constructor() {
        this._id            = ""
        this._name          = "";
        this._description   = "";
        this._default_price = 0
    }

    public loadFromJson(json: any) {
        Object.assign(this, {
            _id: json.id,
            _name: json.name,
            _description: json.description,
            _default_price: json.default_price
        });
    }
}