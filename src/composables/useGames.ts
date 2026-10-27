import {useGamesStore} from "@/stores/games.ts";
import {storeToRefs} from "pinia";
import {onMounted, ref} from "vue";
import GamesServices from "@/service/GamesServices.ts";

const useGames = () => {
    const store = useGamesStore();
    const { games } = storeToRefs(store);
    const currentPage = ref(1);
    const lastPage = ref(1);
    const total = ref(0);
    const isLoading = ref(false);

    onMounted(async () => {
        await fetchGames();
    })

    const fetchGames = async (page = 1) => {
        isLoading.value = true;
        try {
            const response = await GamesServices.getGames(page);
            store.setGames(response.data);
            currentPage.value = response.meta.current_page;
            lastPage.value = response.meta.last_page;
            total.value = response.meta.total;
        } finally {
            isLoading.value = false;
        }
    }

    return {
        games,
        currentPage,
        lastPage,
        total,
        isLoading,
        fetchGames
    }
}

export default useGames;