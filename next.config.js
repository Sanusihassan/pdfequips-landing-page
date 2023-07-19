// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   output: "export",
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
// };

// export default {};

// module.exports = nextConfig;

// /**
//  * @type {import('next').NextConfig}
//  */

const nextConfig = {
  output: "export",
  distDir: "./out/templates",
};

// module.exports = nextConfig;

// module.exports = {
//   exportPathMap: async function (
//     defaultPathMap,
//     { dev, dir, outDir, distDir, buildId }
//   ) {
//     return {
//       ...defaultPathMap,
//     };
//   },
//   output: "export",
//   // ignoreDuringBuilds: true,

//   // target: "serverless",
// };

// module.exports = {
//   exportPathMap: async function (
//     defaultPathMap,
//     { dev, dir, outDir, distDir, buildId }
//   ) {
//     // Copy the defaultPathMap to a new object
//     const pathMap = { ...defaultPathMap };

//     // Set the outDir to 'out/templates'
//     outDir = "out/templates";

//     // Return the pathMap and the new outDir
//     return { pathMap, outDir };
//   },
// };
// next.config.js

// const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
// const withTM = require("next-transpile-modules")([
//   // `monaco-editor` isn't published to npm correctly: it includes both CSS
//   // imports and non-Node friendly syntax, so it needs to be compiled.
//   "monaco-editor",
// ]);

// module.exports = withTM({
//   webpack: (config) => {
//     const rule = config.module.rules
//       .find((rule) => rule.oneOf)
//       .oneOf.find(
//         (r) =>
//           // Find the global CSS loader
//           r.issuer && r.issuer.include && r.issuer.include.includes("_app")
//       );
//     if (rule) {
//       rule.issuer.include = [
//         rule.issuer.include,
//         // Allow `monaco-editor` to import global CSS:
//         /[\\/]node_modules[\\/]monaco-editor[\\/]/,
//       ];
//     }
//     // Add support for markdown files
//     config.module.rules.push({
//       test: /\.md$/,
//       use: "raw-loader",
//     });

//     config.plugins.push(
//       new MonacoWebpackPlugin({
//         languages: [
//           "json",
//           "markdown",
//           "css",
//           "typescript",
//           "javascript",
//           "html",
//           "graphql",
//           "python",
//           "scss",
//           "yaml",
//         ],
//         filename: "static/[name].worker.js",
//       })
//     );

//     return config;
//   },
// });



const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'node_modules')],
  },
  webpack: (config, { isServer }) => {
    // Disable chunk splitting for non-server bundles
    if (!isServer) {
      config.optimization.splitChunks = {
        cacheGroups: {
          default: false,
        },
      };
    }

    // Add your additional webpack configuration here if needed

    return config;
  },
};
