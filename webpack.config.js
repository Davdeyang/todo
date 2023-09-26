const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  const dev = env && env.dev;
  const prod = env && env.prod;
  return {
    entry: "./src/index.tsx",
    // devtool: dev && "cheap-module-eval-source-map",//不同源码的映射类型
    devServer: {
      hot: true, // 启用热模块替换
      contentBase: path.join(__dirname, "dist"), // 静态文件根目录
      port: 3000, // 服务器端口号
      open: true, // 是否在启动时自动打开浏览器
      proxy: {
        "/api": {
          target: "http://localhost:3000", // 代理目标地址
        },
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "React Demo",
      }),
    ],
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          use: { loader: "babel-loader" },
        },
        {
          test: /\.less$/,
          use: ["style-loader", "css-loader", "less-loader"],
        },
      ],
    },
    mode: dev ? "development" : prod ? "production" : "none",
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      alias: {
        "react-dom": "@hot-loader/react-dom",
      },
    },
  };
};
