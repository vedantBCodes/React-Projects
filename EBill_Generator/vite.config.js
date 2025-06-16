// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['jspdf'], // Ensure it's pre-bundled
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/], // Allow CommonJS in build
    },
  },
})
