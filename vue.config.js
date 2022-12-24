module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("pdf")
      .test(/\.(pdf)(\?.*)?$/)
      .use("file-loader")
      .loader("file-loader");
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '/portfolio-vue/'
  : '/'
};
