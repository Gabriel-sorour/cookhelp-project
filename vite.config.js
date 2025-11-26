import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/cookhelp-project/',
   server: {
    allowedHosts: ['austere-craniometrically-florencia.ngrok-free.dev']
  }
})
