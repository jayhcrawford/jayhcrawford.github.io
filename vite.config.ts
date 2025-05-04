import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: ({ name }) => {
          if (name && name.match(/\.(ttf|woff|woff2|eot|otf)$/)) {
            return 'assets/fonts/[name][extname]';
          }
          return 'assets/[name][extname]';
        },
      },
    },
  },
});
