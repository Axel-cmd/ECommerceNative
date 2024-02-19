
export interface DatabaseArticle {
    default_price: number,
    name: string,
    description: string
}

/**
 * Type pour la liste d'article
 */
export type Articles = Article[];


export class Article {
    /** ID unique de l'article */
    private _id: string;
    /** Nom de l'article */
    private _name: string;
    /** Description de l'article */
    private _description: string;
    /** prix par défaut de l'article (sans réduction/promotion) */
    private _defaultPrice: number;

    constructor() {
        this._id            = ""
        this._name          = "";
        this._description   = "";
        this._defaultPrice = 0
    }

    //#region GETTER

    public get id() : string {
        return this._id;
    }

    public get name() : string {
        return this._name;
    }
    
    public get description() : string {
        return this._description
    }
    
    public get defaultPrice() : number {
        return this._defaultPrice;
    }
    
    //#endregion

    public loadFromJson(json: any) {
        Object.assign(this, {
            _id: json.id,
            _name: json.name,
            _description: json.description,
            _default_price: json.default_price
        });
    }
}