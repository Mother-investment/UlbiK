import type { RuleSetRule } from 'webpack'
import { BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack']
	}
	const cssLoader = buildCssLoader(isDev)
	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/
	}
	const fileLoader = {
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: 'file-loader'
			}
		]
	}
	const babelLoader = {
		test: /\.(js|ts|jsx|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
				plugins: [
					[
						'i18next-extract',
						{
							locales: ['ru', 'en'],
							keyAsDefaultValue: true
						}
					]
				]
			}
		}
	}

	return [fileLoader, svgLoader, cssLoader, babelLoader, typescriptLoader] // порядок лоудеров в массиве важен
}
