import path from 'path'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'

import type { Configuration } from 'webpack'
import type { BuildOptions } from './types/config'

export function buildWebpackConfig(options: BuildOptions): Configuration {
    const {mode, paths} = options
    return {
        mode: mode, // мод сборки
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js', // файл сборки
            path: paths.build,
            clean: true // очистка старых файлов сбоки
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders() // обработка файлов, не являющихся js (ts, css,..)
        },
        resolve: buildResolvers()
    }
}
