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
