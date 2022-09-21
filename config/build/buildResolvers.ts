import type { ResolveOptions } from 'webpack'
import { BuildOptions } from './types/config'

export function buildResolvers(options: BuildOptions):ResolveOptions {
	return {
		extensions: ['.tsx', '.ts', '.js'], // типы файлов, которым не нужно писать расширения при импорте
		preferAbsolute: true,
		modules: [options.paths.src, 'node_modules'],
		mainFiles: ['index'],
		alias: {}
	}
}
