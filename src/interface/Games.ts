export interface Games {
    id?: number
    name_game: string
    image_url: string
    plataforma: string
    estado: string
}

export interface GamesPaginatedResponse {
    data: Games[]
    links: {
        first: string
        last: string
        prev: string | null
        next: string | null
    }
    meta: {
        current_page: number
        from: number | null
        last_page: number
        links: Array<{
            url: string | null
            label: string
            page: number | null
            active: boolean
        }>
        path: string
        per_page: number
        to: number | null
        total: number
    }
}