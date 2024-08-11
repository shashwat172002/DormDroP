import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
<<<<<<< HEAD
        target: 'http://localhost:3000',       //https://dormdrop.onrender.com   //http://localhost:3000
=======
        target: 'http://localhost:3001',
>>>>>>> 29df0fd7b935199a45dfb4d590d35c11e8a7cd5b
        secure: false,
      },
    },
  },
  plugins: [react()],
});