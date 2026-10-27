<script setup lang="ts">
  import useFormGame from "@/composables/useFormGame.ts";
  import router from "@/router";

  const {name_game, image_url, plataforma, estado, isEditing, submitGame, resetForm} = useFormGame();

  const cancelEdit = () => {
    resetForm();
    router.push('/');
  };
</script>

<template>
<form @submit.prevent="submitGame">
  <div>
    <label for="name">Nombre:</label>
    <input type="text" id="name" v-model="name_game" required />
  </div>
  <div>
    <label for="image">Imagen:</label>
    <input type="text" id="image" v-model="image_url" />
  </div>
  <div>
    <label for="platform">Plataforma:</label>
    <select id="platform" v-model="plataforma" required>
      <option value="" disabled>Selecciona una plataforma</option>
      <option value="ps4">PS4</option>
      <option value="ps5">PS5</option>
      <option value="steam">Steam</option>
      <option value="xbox">Xbox</option>
      <option value="epic">Epic Games</option>
    </select>
  </div>
  <div>
    <label for="status">Estado:</label>
    <select id="status" v-model="estado" required>
      <option value="" disabled>Selecciona un estado</option>
      <option value="jugando">Jugando</option>
      <option value="finalizado">Finalizado</option>
      <option value="pendiente">Pendiente</option>
    </select>
  </div>
  <div class="form-buttons">
    <button type="submit">{{ isEditing ? 'Actualizar' : 'Guardar' }}</button>
    <button v-if="isEditing" type="button" class="button-cancel" @click="cancelEdit">Cancelar</button>
  </div>
</form>
</template>

<style scoped>
form {
  display: grid;
  gap: 1.25rem;
  width: min(100%, 520px);
  margin: 0 auto;
  padding: clamp(1.25rem, 4vw, 2rem);
  border: 1px solid #2b2e38;
  border-radius: 0.9rem;
  background: #1a1d25;
  box-shadow: 0 12px 30px #0003;
}

form > div {
  display: grid;
  gap: 0.5rem;
}

label {
  color: #d4d4d8;
  font-size: 0.9rem;
  font-weight: 600;
}

input,
select {
  width: 100%;
  min-height: 2.75rem;
  box-sizing: border-box;
  padding: 0.65rem 0.75rem;
  border: 1px solid #414553;
  border-radius: 0.5rem;
  color: #f3f4f6;
  background: #252936;
  font: inherit;
}

input:focus,
select:focus {
  border-color: #8b7ee8;
  outline: 2px solid #8b7ee833;
}

select option {
  color: #f3f4f6;
  background: #252936;
}

.form-buttons {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

button {
  justify-self: start;
  margin-top: 0.25rem;
  padding: 0.65rem 1rem;
  border: 1px solid #8b7ee8;
  border-radius: 0.5rem;
  color: #f9fafb;
  background: #6d5fc7;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 150ms ease, border-color 150ms ease;
}

button:hover {
  border-color: #a78bfa;
  background: #7c6de0;
}

.button-cancel {
  border-color: #414553;
  background: #252936;
  color: #d4d4d8;
}

.button-cancel:hover {
  border-color: #71717a;
  background: #303446;
}
</style>
