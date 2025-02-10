import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsx: 'react-jsx'  // Enable automatic JSX runtime for React 17+
    }),
    svgr()
  ],
});