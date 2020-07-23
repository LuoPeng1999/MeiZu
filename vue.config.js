module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://mwx-api.meizu.com",
        changeOrigin: true,
        pathRewrite: {
          "/api": ""
        }
      }
    }
  }
};
