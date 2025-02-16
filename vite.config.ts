import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		nodePolyfills({
			include: ["buffer", "process", "stream"],
		}),
	],
	resolve: {
		alias: {
			"@utils": path.resolve(__dirname, "./src/common/utils"),
			"@common": path.resolve(__dirname, "./src/common"),
			"@libs": path.resolve(__dirname, "./src/lib"),
			"@resources": path.resolve(__dirname, "./src/resources"),
			"@components": path.resolve(__dirname, "./src/resources/components"),
			"@pages": path.resolve(__dirname, "./src/resources/pages"),
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
