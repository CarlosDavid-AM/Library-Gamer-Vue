import GamesServices from "@/service/GamesServices.ts";
import {useGamesStore} from "@/stores/games.ts";
import useFormGame from "@/composables/useFormGame.ts";
import type {Games} from "@/interface/Games.ts";
import router from "@/router";

const useButtonsGame = () => {
    const store = useGamesStore();

    const {
        currentGameId,
        name_game,
        image_url,
        plataforma,
        estado,
        isEditing,
        resetForm
    } = useFormGame();

    const deleteGame = async (id: number | undefined) => {
        if (id === undefined) {
            throw new Error("Game id is required");
        }

        await GamesServices.deleteGame(id);
        store.setGames(store.games.filter((game) => game.id !== id));
    };

    const editGame = async (id: number | undefined) => {
        if (id === undefined) {
            throw new Error("Game id is required");
        }

        const response = await GamesServices.getGameById(id);
        const game = (response as any)?.data ?? response;

        currentGameId.value = game.id ?? id;
        name_game.value = game.name_game ?? '';
        image_url.value = game.image_url ?? '';
        plataforma.value = game.plataforma ? String(game.plataforma).toLowerCase() : '';
        estado.value = game.estado ? String(game.estado).toLowerCase() : '';
        isEditing.value = true;

        await router.push('/add');
    };

    const updateGame = async (id?: number, gameData?: Games) => {
        // Si se llama solo con el id (ej. desde el botón Editar en GamesView),
        // prepara la edición cargando los datos en el formulario y navegando a /add
        if (id !== undefined && !gameData) {
            return await editGame(id);
        }

        const targetId = id ?? currentGameId.value;
        if (!targetId) {
            throw new Error("Game id is required to update");
        }

        const dataToUpdate: Games = gameData ?? {
            name_game: name_game.value,
            image_url: image_url.value,
            plataforma: plataforma.value,
            estado: estado.value
        };

        const response = await GamesServices.updateGame(targetId, dataToUpdate);
        const updatedGame = (response as any)?.data ?? response;

        // Actualizar el store de Pinia si contiene la lista de juegos
        if (store.games.length > 0) {
            store.setGames(
                store.games.map((g) => (g.id === targetId ? { ...g, ...updatedGame } : g))
            );
        }

        resetForm();
        await router.push('/');
        return response;
    };

    return {
        deleteGame,
        editGame,
        updateGame,
    };
};

export default useButtonsGame;
