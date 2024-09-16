import { fileURLToPath, URL } from 'node:url';

import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'@img': fileURLToPath(new URL('./src/assets/img', import.meta.url)),
		},
	},
	css: {
		postcss: {
			plugins: [
				autoprefixer({}), // add options if needed
			],
		},
	},
});
