import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'

import type { Configuration } from 'webpack'
import type { BuildOptions } from './types/config'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig(options: BuildOptions): Configuration {
	const { paths, mode, isDev } = options

	return {
		mode, // мод сборки
		performance: {
			hints: false,
			maxEntrypointSize: 512000,
			maxAssetSize: 512000
		},
		entry: paths.entry,
		output: {
			filename: '[name].[contenthash].js', // файл сборки
			path: paths.build,
			clean: true // очистка старых файлов сбоки
		},
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(options) // обработка файлов, не являющихся js (ts, css,..)
		},
		resolve: buildResolvers(options),
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? buildDevServer(options) : undefined
	}
}
