/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  env:{
    host: "https://lava-solution.onrender.com"
  },
  images: {
    domains: ["i.imgur.com"], // Specify the remote domain here
  },
};

module.exports = nextConfig;
