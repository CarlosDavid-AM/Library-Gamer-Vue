<script setup lang="ts">
import useGames from "@/composables/useGames.ts";
import useButtonsGame from "@/composables/useButtonsGame.ts";

const {games, currentPage, lastPage, total, isLoading, fetchGames} = useGames()
const {deleteGame, updateGame} = useButtonsGame()

</script>

<template>
  <main class="games-page">
    <header class="page-header">
      <div>
        <p class="eyebrow">Tu colección</p>
        <h1>Mis juegos</h1>
      </div>
      <p class="game-count">{{ total }} juegos</p>
    </header>

    <p v-if="isLoading" class="message" role="status">Cargando juegos...</p>
    <p v-else-if="games.length === 0" class="message">No hay juegos para mostrar.</p>

    <section v-else class="games-grid" aria-label="Lista de juegos">
      <article v-for="game in games" :key="game.id" class="game-card">
        <img
          class="game-image"
          :src="game.image_url"
          :alt="`Portada de ${game.name_game}`"
        />
        <div class="game-content">
          <h2>{{ game.name_game }}</h2>
          <dl class="game-details">
            <div>
              <dt>Plataforma</dt>
              <dd>{{ game.plataforma }}</dd>
            </div>
            <div>
              <dt>Estado</dt>
              <dd>{{ game.estado }}</dd>
            </div>
          </dl>
          <div class="card-actions">
            <button class="button button-secondary" type="button" @click="updateGame(game.id)">
              Editar
            </button>
            <button class="button button-danger" type="button" @click="deleteGame(game.id)">
              Eliminar
            </button>
          </div>
        </div>
      </article>
    </section>

    <nav v-if="lastPage > 1" class="pagination" aria-label="Paginación de juegos">
      <button
        class="button button-secondary"
        type="button"
        :disabled="isLoading || currentPage <= 1"
        @click="fetchGames(currentPage - 1)"
      >
        Anterior
      </button>
      <span>Página {{ currentPage }} de {{ lastPage }}</span>
      <button
        class="button button-secondary"
        type="button"
        :disabled="isLoading || currentPage >= lastPage"
        @click="fetchGames(currentPage + 1)"
      >
        Siguiente
      </button>
    </nav>
  </main>
</template>

<style scoped>
.games-page {
  min-height: 100vh;
  padding: 3rem clamp(1rem, 5vw, 4rem);
  color: #f3f4f6;
  background: #111318;
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
}

.page-header {
  display: flex;
  align-items: end;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto 2rem;
}

.eyebrow {
  margin: 0 0 0.35rem;
  color: #a78bfa;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

h1 {
  margin: 0;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
}

.game-count,
.message {
  color: #a1a1aa;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 260px), 1fr));
  gap: 1.25rem;
  max-width: 1200px;
  margin: 0 auto;
}

.game-card {
  overflow: hidden;
  border: 1px solid #2b2e38;
  border-radius: 0.9rem;
  background: #1a1d25;
  box-shadow: 0 12px 30px #0003;
}

.game-image {
  display: block;
  width: 100%;
  height: 190px;
  object-fit: cover;
  background: #252936;
}

.game-content {
  padding: 1rem;
}

.game-content h2 {
  margin: 0 0 1rem;
  font-size: 1.1rem;
}

.game-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  margin: 0;
}

.game-details dt {
  margin-bottom: 0.25rem;
  color: #9ca3af;
  font-size: 0.75rem;
  text-transform: uppercase;
}

.game-details dd {
  margin: 0;
  color: #e5e7eb;
  text-transform: capitalize;
}

.card-actions {
  display: flex;
  gap: 0.65rem;
  margin-top: 1.25rem;
}

.button {
  border: 1px solid transparent;
  border-radius: 0.5rem;
  padding: 0.55rem 0.85rem;
  color: #f9fafb;
  font: inherit;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 150ms ease, border-color 150ms ease;
}

.button:disabled {
  cursor: not-allowed;
  opacity: 0.45;
}

.button-secondary {
  border-color: #414553;
  background: #252936;
}

.button-secondary:not(:disabled):hover {
  border-color: #8b7ee8;
  background: #303446;
}

.button-danger {
  background: #9f343d;
}

.button-danger:hover {
  background: #bd3e49;
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 2rem auto 0;
  color: #d4d4d8;
}

.message {
  max-width: 1200px;
  margin: 3rem auto;
  text-align: center;
}

@media (max-width: 480px) {
  .page-header {
    align-items: start;
    flex-direction: column;
    gap: 0.75rem;
  }

  .pagination {
    gap: 0.55rem;
  }
}
</style>
