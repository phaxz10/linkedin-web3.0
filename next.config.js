/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    MORALIS_SERVER: process.env.MORALIS_SERVER,
    MORALIS_APPID: process.env.MORALIS_APPID,
  },
}
