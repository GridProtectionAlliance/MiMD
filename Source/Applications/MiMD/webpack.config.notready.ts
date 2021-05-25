import * as path from 'path';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
    mode: 'development',
    context: path.resolve(__dirname, 'wwwroot', 'Scripts'),
    cache: true,
    entry: {
        MiMD: "./TSX/MiMD/MiMD.tsx",
        //ByMeter: "./TSX/MiMD/OpenXDA/ByMeter.tsx",
        //ByLocation: "./TSX/MiMD/OpenXDA/ByLocation.tsx",
        //ByAsset: "./TSX/MiMD/OpenXDA/ByAsset.tsx",
        //Asset: "./TSX/MiMD/Asset/Asset.tsx",
        //NewMeterWizard: "./TSX/MiMD/NewMeterWizard/NewMeterWizard.tsx",
        //ConfigurationHistory: "./TSX/MiMD/ConfigurationHistory/ConfigurationHistory.tsx",
    },
    output: {
        path: path.resolve(__dirname, 'wwwroot', 'Scripts'),
        publicPath: path.resolve(__dirname, 'wwwroot', 'Scripts'),
        filename: "[name].js",
        chunkFilename: '[name].bundle.js'
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "inline-source-map",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".css"]
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, loader: "ts-loader" },
            {
                test: /\.css$/,
                include: /\./,
                loaders: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js$/,
                enforce: "pre",
                loader: "source-map-loader"
            },
            { test: /\.(woff|woff2|ttf|eot|svg|png|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=100000" }
        ]
    },
    externals: {
        jquery: 'jQuery',
        react: 'React',
        'react-dom': 'ReactDOM',
        //moment: 'moment',
        ace: 'ace',
        d3: 'd3',
        'react-router-dom': 'ReactRouterDOM',
    },
    optimization: {
        //minimizer: [new UglifyJsPlugin({
        //    test: /\.js(\?.*)?$/i,
        //    sourceMap: true
        //})],
    },
}

export default config;