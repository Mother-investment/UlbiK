import { BuildPaths } from "../build/types/config"
import { Configuration, DefinePlugin, RuleSetRule } from "webpack"
import path from "path"
import { buildCssLoader } from '../build/loaders/buildCssLoader'

export default ({config}: {config: Configuration}) => {
	const paths: BuildPaths = {
		build: '',
		html: '',
		entry: '',
		src: path.resolve(__dirname, '..', '..', 'src')
	}
	config.resolve.modules = [ paths.src, "node_modules" ]
	config.resolve.extensions.push('.ts', '.tsx')

	config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
		if(/svg/.test(rule.test as string)) {
			return {...rule, exclude: /\.svg$/i}
		}
		return rule
	})
	config.module.rules.push({
		test: /\.svg$/,
		use: ['@svgr/webpack']
	})
	config.module.rules.push(buildCssLoader(true))

	config.plugins.push(new DefinePlugin({
		__IS_DEV__: JSON.stringify(true),
		__API__: JSON.stringify('')
	}))

	return config
}