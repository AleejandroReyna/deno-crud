export interface ModelInterface {
    readonly table : string 
}

export interface GetterModelInterface extends ModelInterface {
    getItems() : Promise<any[]>
    getItem(id: string) : Promise<any>
}

