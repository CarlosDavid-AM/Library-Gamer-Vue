import type {Games, GamesPaginatedResponse} from "@/interface/Games.ts";
import api from "@/api/api";

const getGames = async (page = 1): Promise<GamesPaginatedResponse> => {
    const {data} = await api.get<GamesPaginatedResponse>("/juegos", {
        params: {page}
    });
    return data;
}

const getGameById = async (id: number): Promise<Games> => {
    const {data} = await api.get(`/juegos/${id}`);
    return (data as any)?.data ?? data;
}

const saveGame = async (game: Games): Promise<Games> => {
    const {data} = await api.post("/juegos", game);
    return (data as any)?.data ?? data;
}

const updateGame = async (id: number, game: Games): Promise<Games> => {
    const getGame = await getGameById(id);
    if (!getGame) {
        throw new Error("Game not found");
    }
    const {data} = await api.put(`/juegos/${id}`, game);
    return (data as any)?.data ?? data;
}

const deleteGame = async (id: number) => {
    const getGame = await getGameById(id);
    if (!getGame) {
        throw new Error("Game not found");
    }

    const {data} = await api.delete(`/juegos/${id}`);
    return data;
}

export default {
    getGames,
    getGameById,
    saveGame,
    updateGame,
    deleteGame
}
