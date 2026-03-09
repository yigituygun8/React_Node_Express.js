import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
/*
This file is the configuration file for Vite, a build tool that provides a faster and leaner development experience for modern web projects. 
The `defineConfig` function is imported from Vite, and the React plugin is imported to enable support for React in the project.
*/
