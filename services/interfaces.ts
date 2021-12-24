export interface ModelInterface {
    readonly table : string 
}

export interface GetterModelInterface extends ModelInterface {
    getItems() : Promise<any[]>
    getItem(id: string | number) : Promise<any>
}

export interface CreatorModelInterface extends ModelInterface {
    readonly defaultItem : any
    createItem( item: any ) : Promise<any>
}

export interface UpdaterModelInterface extends CreatorModelInterface {
    updateItem(id: string | number, item: any) : Promise<any>
}

export interface DeleterModelInterface extends ModelInterface {
    deleteItem(id: string | number) : Promise<any>
}