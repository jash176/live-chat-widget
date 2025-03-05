const path = require("path");

module.exports = {
  entry: "./src/components/chatWidget/ChatWidget.jsx", // Make sure this is the main entry file
  output: {
    filename: "chatWidget.bundle.js",
    path: path.resolve(__dirname, "dist"),
    library: "ChatWidget",
    libraryTarget: "window",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules|src\/app/, // Excludes the 'app' folder
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "src"), // Now '@' points to 'src'
    },
  },
  mode: "production",
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }, // Remove React from externals so it gets bundled
};
