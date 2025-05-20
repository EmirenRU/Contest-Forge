import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
    server: {
        proxy: {
            "/protocol-api": {
                target: "http://localhost:13134",
                changeOrigin: true,
                rewrite: function (path) { return path.replace(/^\/protocol-api/, ''); },
            }
        },
    },
    plugins: [react()],
});
