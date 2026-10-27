import {defineStore} from "pinia";
import type {Games} from "@/interface/Games.ts";
import {ref} from "vue";

export const useGamesStore = defineStore('games', () => {
    // state to hold the list of games
    const games = ref<Games[]>([]);
    const formGameData = ref<Games>();

    // action to fetch games from the API
    const setGames = (newGames: Games[]) => {
        games.value = newGames;
    }

    const setFormGameData = (newGamesData: Games) => {
        formGameData.value = newGamesData;
    }

    return {
        // state
        games,
        formGameData,

        // action
        setGames,
        setFormGameData,
    }
})