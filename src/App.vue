<script setup lang="ts">
import useFormGame from "@/composables/useFormGame.ts";

const {resetForm} = useFormGame();
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/add" @click="resetForm">Add Game</RouterLink>
      </nav>
    </div>
    <RouterView />
  </header>
</template>

<style scoped>
nav {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem clamp(1rem, 5vw, 4rem);
  background: #1a1d25;
  border-bottom: 1px solid #2b2e38;
}

nav a {
  padding: 0.5rem 0.875rem;
  color: #d4d4d8;
  font-weight: 600;
  text-decoration: none;
  border-radius: 0.5rem;
  transition: color 0.2s ease, background-color 0.2s ease;
}

nav a:hover {
  color: #f9fafb;
  background: #252936;
}

nav a.router-link-active {
  color: #f9fafb;
  background: #303446;
  box-shadow: inset 0 -2px #a78bfa;
}
</style>
