
export interface DatabaseArticle {
    default_price: number,
    name: string,
    description: string;
    image: string;
    collection: string;
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
    /** Image lié à l'article */
    private _image: string;
    /** Collection à laquelle appartient l'article */
    private _collection: string;

    constructor() {
        this._id            = ""
        this._name          = "";
        this._description   = "";
        this._defaultPrice  = 0;
        this._collection    = "";
        this._image         = "";
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

    public get image() : string {
        return this._image;
    }

    public get collection() : string {
        return this._collection
    }
    //#endregion

    public loadFromJson(json: any) {
        Object.assign(this, {
            _id: json.id,
            _name: json.name,
            _description: json.description,
            _defaultPrice: json.default_price,
            _image: json.image,
            _collection: json.collection,
        });
    }
}