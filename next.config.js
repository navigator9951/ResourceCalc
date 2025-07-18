/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    basePath: "/ResourceCalc",  // Set the github repo name as the base path
    env: {
      githubRepoUrl: "https://github.com/navigator9951/ResourceCalc",
    }
  };
  
 module.exports = nextConfig;
  
