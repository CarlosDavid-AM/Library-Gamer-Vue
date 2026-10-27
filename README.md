# Library Games 🎮

Una aplicación web moderna (SPA) para la gestión y administración de una colección personal de videojuegos. Permite realizar operaciones CRUD completas (crear, listar, actualizar y eliminar juegos), organizarlos según su plataforma y dar seguimiento a su estado de juego actual.

---

## 🚀 Características

- **Catálogo de Videojuegos:** Visualización en cuadrícula con portada, título, plataforma y estado de cada juego.
- **Paginación y Conteo:** Navegación paginada integrada con el backend y contador total de videojuegos registrados.
- **Gestión Completa (CRUD):**
  - Registro de nuevos juegos con nombre, URL de portada, plataforma y estado.
  - Edición reactiva de juegos existentes.
  - Eliminación de títulos de la colección.
- **Arquitectura Limpia:** Separación de responsabilidades mediante la Composition API de Vue 3, Composables reutilizables y servicios desacoplados para la API.
- **Estado Global:** Manejo centralizado del estado con Pinia.

---

## 🛠️ Tecnologías Utilizadas

- **Framework:** [Vue.js 3](https://vuejs.org/) (Composition API con `<script setup>`)
- **Herramienta de Construcción:** [Vite](https://vite.dev/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Gestión de Estado:** [Pinia](https://pinia.vuejs.org/)
- **Enrutador:** [Vue Router](https://router.vuejs.org/)
- **Peticiones HTTP:** [Axios](https://axios-http.com/)
- **Comprobación de Tipos:** [vue-tsc](https://github.com/vuejs/language-tools)

---

## 📁 Estructura del Proyecto

```text
library_games/
├── public/                 # Archivos estáticos públicos
├── src/
│   ├── api/                # Instancia y configuración base de Axios
│   │   └── api.ts
│   ├── componests/         # Componentes Vue reutilizables
│   │   └── FormGames.vue   # Formulario para creación y edición de juegos
│   ├── composables/        # Lógica de negocio y composición reactiva
│   │   ├── useButtonsGame.ts
│   │   ├── useFormGame.ts
│   │   └── useGames.ts
│   ├── interface/          # Modelos y contratos de TypeScript (Games, paginación)
│   │   └── Games.ts
│   ├── router/             # Definición de rutas (Home, AddGame)
│   │   └── index.ts
│   ├── service/            # Capa de servicios para comunicación con la API REST
│   │   └── GamesServices.ts
│   ├── stores/             # Stores de Pinia para estado global
│   │   └── games.ts
│   ├── views/              # Vistas principales de la aplicación
│   │   ├── FormGameView.vue
│   │   └── GamesView.vue
│   ├── App.vue             # Componente raíz con navegación
│   └── main.ts             # Punto de entrada de la aplicación
├── package.json            # Scripts y dependencias del proyecto
├── tsconfig.json           # Configuración de TypeScript
└── vite.config.ts          # Configuración de Vite
```

---

## 📋 Requisitos Previos

Antes de ejecutar la aplicación, asegúrate de contar con:

- **Node.js**: Versión `^22.18.0` o `>=24.12.0` (o LTS compatible).
- **npm**: Gestor de paquetes incluido con Node.js.
- **Backend API**: Un servidor backend en ejecución que exponga el endpoint de videojuegos en `http://localhost:8000/api/juegos`.

---

## ⚡ Comandos para Ejecutar el Proyecto

### 1. Clonar el repositorio e ingresar al directorio

```sh
cd library_games
```

### 2. Instalar dependencias

```sh
npm install
```

### 3. Modo Desarrollo (Hot-Reload)

Inicia el servidor local de desarrollo con Vite:

```sh
npm run dev
```

El servidor estará disponible por defecto en:
👉 `http://localhost:5173`

---

## 📦 Otros Comandos Disponibles

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo local con recarga en caliente (HMR). |
| `npm run build` | Ejecuta la comprobación estática de tipos (`type-check`) y compila para producción (`dist/`). |
| `npm run preview` | Previsualiza localmente la compilación de producción generada por Vite. |
| `npm run type-check` | Realiza la verificación de tipos con `vue-tsc` sin generar archivos. |
| `npm run build-only` | Compila los archivos para producción sin pasar por la verificación de tipos. |

---

## 💻 Configuración de Entorno Recomendada

- **Editor:** [VS Code](https://code.visualstudio.com/)
- **Extensión oficial:** [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (desactivar Vetur si está instalado).
- **Herramientas de desarrollo del navegador:** [Vue.js devtools](https://devtools.vuejs.org/)

**Nota Importante:** Este frontend requiere de una API activa para funcionar correctamente. El proyecto backend se encuentra en el siguiente enlace:

👉 [Repositorio Backend](https://github.com/CarlosDavid-AM/Library-Gamer-Laravel) | | https://github.com/CarlosDavid-AM/Library-Gamer-Laravel