import terser from '@rollup/plugin-terser';
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import dts from "rollup-plugin-dts";
import pkg from "./package.json" with { type: 'json' };
import scss from 'rollup-plugin-scss';



export default [
  {
    preserveModules: true,
    input: "src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(), // automatically peer dependencies listed in package.json
      resolve(), // allows rollup to find and bundle dependencies from node_modules
      commonjs(), // converts commonJs modules to ES6 so that they can be included in rollup bundle
      typescript({ tsconfig: "./tsconfig.json" }), // integrates typescript compilation into rollup
      scss({ fileName: 'styles.css', silenceDeprecations: ['legacy-js-api'] }), // compiles SCSS files to CSS and includes them in the bundle
      terser(), // minifies the output files
    ],
    external: ["react", "react-dom"],
  },
  // TypeScript declarations bundling configuration
  {
    input: "dist/types/index.d.ts", // The entry point for the types
    output: [{ file: "dist/index.d.ts", format: "esm" }], // Output bundled d.ts file
    external: [/\.css$/, /\.scss$/], // Exclude CSS and SCSS files from the output
    plugins: [dts()], // bundles typescript declaration files (.d.ts) into a single file
  },
]