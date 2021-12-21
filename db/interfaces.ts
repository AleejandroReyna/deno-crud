// This interface defines the DB table "movies" register
export interface Movie {
    id?: number,
    name: string,
    description?: string,
    created_at?: string,
    updated_at?: string
}