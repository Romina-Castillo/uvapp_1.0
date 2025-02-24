import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.jsx",  // Cambié a .jsx
    deps: {
      inline: ["react-leaflet"]
    }
  }
});
