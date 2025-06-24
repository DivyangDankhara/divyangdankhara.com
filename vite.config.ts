import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/divyangdankhara.com/', // Use '/' for custom domains like divyangdankhara.com
});
