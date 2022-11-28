import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "./index.ts"),
      formats: ["es", "umd"],
      fileName: "super-sdk",
      name: "super-sdk",
    },
  },
  plugins: [
    // This plugin doesn't work, doesn't resolve modules and ends up compiling type defs for ALL node_modules
    // even though we are not using any in our source code, all of them are dev dependencies. So what needs to be done now
    // is to take the webpack plugin that is being used in this project and re write it for vite
    dts({
      staticImport: true,
      insertTypesEntry: true,
      rollupTypes: true,
    }),
  ],
});
