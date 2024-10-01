const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js", // 入口文件
    output: {
        path: path.resolve(__dirname, "dist"), // 输出路径
        filename: "bundle.js", // 输出文件名
        clean: true, // 自动清理输出目录
    },
    resolve: {
        extensions: [".js", ".jsx"], // 解析文件扩展名
        alias: {
            "@components": path.resolve(__dirname, "src/components"),
            "@styles": path.resolve(__dirname, "src/styles"),
            "@utils": path.resolve(__dirname, "src/utils"),
            "@assets": path.resolve(__dirname, "src/assets"),
        },
    },
    module: {
        rules: [
            // CSS 加载器
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            // SASS 加载器
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            // 图片加载器
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            // 字体加载器
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
            // JavaScript 加载器
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html", // 模板文件
            filename: "index.html", // 输出文件名
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        compress: true,
        port: 3000,
        open: true,
        hot: true,
    },
    mode: "development", // 开发模式
    devtool: "inline-source-map", // 开发工具
};
