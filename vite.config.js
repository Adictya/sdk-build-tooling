import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { externalizeDeps } from "vite-plugin-externalize-deps";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "./src/index.ts"),
      formats: ["umd"],
      fileName: "super-sdk",
      name: "AgoraSuperSdk",
    },
  },
  plugins: [
    externalizeDeps(),
    dts({
      staticImport: true,
      insertTypesEntry: true,
      rollupTypes: true,
    }),
  ],
});
