import {ref} from "vue";
import type {Games} from "@/interface/Games.ts";
import GamesServices from "@/service/GamesServices.ts";
import router from "@/router";

const currentGameId = ref<number | null>(null);
const name_game = ref<string>('');
const image_url = ref<string>('');
const plataforma = ref<string>('');
const estado = ref<string>('');
const isEditing = ref(false);

const resetForm = () => {
    currentGameId.value = null;
    name_game.value = '';
    image_url.value = '';
    plataforma.value = '';
    estado.value = '';
    isEditing.value = false;
};

const useFormGame = () => {
    const submitGame = async () => {
        const formData: Games = {
            name_game: name_game.value,
            image_url: image_url.value,
            plataforma: plataforma.value,
            estado: estado.value
        };

        let res;
        if (isEditing.value && currentGameId.value !== null) {
            res = await GamesServices.updateGame(currentGameId.value, formData);
        } else {
            res = await GamesServices.saveGame(formData);
        }

        if (res) {
            resetForm();
            await router.push('/');
        }
    };

    return {
        currentGameId,
        name_game,
        image_url,
        plataforma,
        estado,
        isEditing,
        resetForm,
        submitGame
    };
};

export default useFormGame;
