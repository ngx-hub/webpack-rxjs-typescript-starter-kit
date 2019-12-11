const path = require('path');

const CONFIG = {
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		port: 4000,
		open: true,
		compress: true,
        overlay: true		 // show error in overlay
	},
	entry: "./src/index.ts",
	output: {
		path: path.resolve(__dirname, 'dist/scripts'),
		filename: 'main.js',
		publicPath: 'scripts/' // относительная ссылка на данный файл, которая будет подставлятся из браузера
	},
	resolve: {
		extensions: [".ts", ".js", ".json"]
	},
	module: {
		rules: [
			// all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
			{
				test: /\.ts$/,
				loader: "ts-loader"
			}
		]
	}
};

module.exports = (env, options) => {
	CONFIG.mode = options.mode;
    CONFIG.devtool = options.mode === 'production' ? false : 'inline-source-map';
    return CONFIG;
};