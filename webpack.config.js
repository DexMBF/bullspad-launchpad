const path = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const webpack = require("webpack")

const interpolateFileData = (fileData, chunk = false) => {
  const chunkNameData = fileData.chunk.id.split("_")
  const shortChunkHash = (fileData.chunk.hash ?? String(Math.random()).split(".")[1]).slice(0, 6)

  if (chunkNameData[0] === "vendors-node") return `modules/${ chunkNameData[3] }.${ shortChunkHash }.js`


  return fileData.chunk.id + (chunk ? `.${ shortChunkHash }` : "") + ".js"
}

const config = {
  stats: "minimal",
  entry: "./src/main.tsx",

  output: {
    path: path.resolve(__dirname, "dist"),
    asyncChunks: true,
    clean: true,

    "filename": fileData => interpolateFileData(fileData),
    "chunkFilename": fileData => interpolateFileData(fileData)
  },

  devServer: {
    open: false,
    host: "0.0.0.0",
    port: 3000,

    compress: true,
    hot: true,

    liveReload: true,
    historyApiFallback: true,

    static: {
      directory: path.join(__dirname, "public"),
      publicPath: "/public"
    },

    client: {
      reconnect: true,
      progress: true
    }
  },

  plugins: [
    new webpack["ProvidePlugin"]({
      process: "process/browser",
      React: "react"
    }),
    new HtmlWebpackPlugin({ template: "index.html" }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: "public", to: "public", filter: filepath => filepath.split("/")
            .slice(-1)[0] !== "robots.txt"
        },
        { from: "public/robots.txt", to: "robots.txt" }
      ]
    })
  ],

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: [ "/node_modules/" ]
      },
      {
        test: /\.s[ac]ss$/i,
        dependency: { not: [ "url" ] },
        use: [ MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader" ]
      },
      {
        test: /\.css$/i,
        dependency: { not: [ "url" ] },
        use: [ MiniCssExtractPlugin.loader, "css-loader", "postcss-loader" ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/"
            }
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: [ ".tsx", ".ts", ".jsx", ".js", ".json" ],
    alias: {
      process: "process/browser"
    },
    fallback: {
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "buffer": require.resolve("buffer/")
    }
  },

  optimization: {
    concatenateModules: true,
    chunkIds: "named",

    splitChunks: {
      chunks: "all",
      maxInitialRequests: 30,
      maxAsyncRequests: 50,

      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 2
        },

        vendors: {
          test: /node_modules/,
          chunks: "all",
          priority: -10,
          minChunks: 1
        },

        default: {
          minChunks: 1,
          chunks: "all",
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },

    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        minify: TerserPlugin.swcMinify,
        terserOptions: {
          compress: true,
          format: {
            comments: false
          }
        },
        extractComments: false
      })
    ]
  },

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
}

module.exports = env => {
  if (process.env.NODE_ENV === "production") config.mode = "production"
  else config.mode = "development"

  if (env.ALLOW_DEBUG === undefined) env.ALLOW_DEBUG = true

  config.plugins = [
    new webpack["DefinePlugin"]({
      "process.env": JSON.stringify({
        "NODE_ENV": typeof process.env.NODE_ENV === "string" ? process.env.NODE_ENV : "development",
        "ALLOW_DEBUG": env.ALLOW_DEBUG
      })
    }),
    ...config.plugins
  ]

  return config
}
