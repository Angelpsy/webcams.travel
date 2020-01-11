require("dotenv-flow").config();
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const Paths = {
    DIST: path.join(__dirname, "/dist")
};



module.exports = (env, argv) => {
    const IS_PROD = argv.mode === "production";
    return {
        entry: [
            "react-hot-loader/patch",
            "./src",
        ],
        output: {
            path: Paths.DIST,
            filename: IS_PROD ? "[name].[contenthash].js" : "[name].js",
        },
        resolve: {
            extensions: [".js", ".jsx"],
            alias: {
                "react-dom": "@hot-loader/react-dom",
                "@": "./src",
            },
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.css$/,
                    use: IS_PROD ?
                        [MiniCssExtractPlugin.loader, "css-loader"] :
                        ["style-loader", "css-loader"],
                },
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: "./public/index.html"
            }),
            new MiniCssExtractPlugin({
                filename: "[name].[contenthash].css"
            }),
        ],
        devServer: {
            hot: true,
            host: "0.0.0.0",
            port: process.env.WEB_DEV_SERVER_PORT,
        }
    }
};
