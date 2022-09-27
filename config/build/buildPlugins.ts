import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

import type { WebpackPluginInstance } from 'webpack'
import type { BuildOptions } from './types/config'

export function buildPlugins({ paths, isDev }: BuildOptions): WebpackPluginInstance[] {
	return [
		new HTMLWebpackPlugin({ template: paths.html }),
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin({ filename:'css/[name].[contenthash:8].css', chunkFilename:'css/[name].[contenthash:8].css' }),
		new webpack.DefinePlugin({ __IS_DEV__: JSON.stringify(isDev) }),
		isDev && new ReactRefreshWebpackPlugin(),
		new BundleAnalyzerPlugin({ openAnalyzer: false })
	]
}
