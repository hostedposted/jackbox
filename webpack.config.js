const path = require("path");

module.exports = {
	mode: "production",
	entry: ["./src/index.ts"],
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: ["ts-loader"],
				exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				],
			},
		],
	},
	resolve: {
		extensions: [".ts"]
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	}
};
