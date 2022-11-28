import fs from "fs";
import { resolve } from "path";

import packageJson from "./package.json";

import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { externalizeDeps } from "vite-plugin-externalize-deps";

Object.keys(packageJson.dependencies).map((v) => {
  console.log(`node_modules/${v}/**`);
});

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
      // include: ["./src/**", "./node_modules/agora-rtc-sdk-ng/rtc-sdk_en.d.ts"],
      // exclude: [],
      // include: [...Object.keys(packageJson.dependencies).map(
      //   (v) => `node_modules/${v}/**`
      // ),'./src/index.ts'],
      // afterBuild: () => {
      //   fs.readFile("dist/super-sdk.d.ts", "utf8", function (err, data) {
      //     if (err) {
      //       return console.log(err);
      //     }
      //     var result = data.replace(
      //       /agora-rtc-sdk-ng/g,
      //       "./lib/agora-rtc-sdk-ng"
      //     );
      //
      //     fs.writeFile("dist/super-sdk.d.ts", result, "utf8", function (err) {
      //       if (err) return console.log(err);
      //     });
      //   });
      //   fs.cp(
      //     "./node_modules/agora-rtc-sdk-ng/rtc-sdk_en.d.ts",
      //     "./dist/lib/agora-rtc-sdk-ng.d.ts",
      //     () => {}
      //   );
      // },
    }),
  ],
});
