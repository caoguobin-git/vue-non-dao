const path = require("path");
// const CompressionWebpackPlugin = require('compression-webpack-plugin')
// const productionGzipExtensions = ['js', 'css']
// const isProduction = process.env.NODE_ENV === 'production'
module.exports = {
  // 基本路径
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  // 输出文件目录
  outputDir: process.env.NODE_ENV === "production" ? "dist" : "devdist",
  /**
   * webpack配置,
   **/
  chainWebpack: (config) => {
    config.resolve.symlinks(true);
  },
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        components: "@/components",
        network: "@/network",
        router: "@/router",
        store: "@/store",
        utils: "@/utils",
        views: "@/views",
      },
    },
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: false,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/css/main.scss";`,
      },
    },
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require("os").cpus().length > 1,
  /**
   *  PWA 插件相关配置,see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
   */
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    open: false, // 编译完成是否打开网页
    host: "0.0.0.0", // 指定使用地址，默认localhost,0.0.0.0代表可以被外界访问
    port: 8080, // 访问端口
    https: false, // 编译失败时刷新页面
    hot: true, // 开启热加载
    hotOnly: false,
    compress: true,
    disableHostCheck: true, //webpack4.0 开启热更新
    proxy: {
      "/": {
        target: "http://117.67.145.145:18080/", //API服务器的地址
        changeOrigin: true,
        pathRewrite: {
          "^/": "/",
        },
      },
    },
    // 设置代理
    overlay: {
      // 全屏模式下是否显示脚本错误
      warnings: true,
      errors: true,
    },
    before: (app) => {},
  },
  /**
   * 第三方插件配置
   */
  pluginOptions: {},
  // configureWebpack: (config) => {
  //   if (isProduction) {
  //     config.plugins.push(
  //       new CompressionWebpackPlugin({
  //         algorithm: "gzip",
  //         test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
  //         threshold: 10240,
  //         minRatio: 0.8,
  //       })
  //     );
  //   }
  // },
};