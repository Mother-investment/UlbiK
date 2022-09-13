import webpack from 'webpack'
import path from 'path'
import HTMLWebpackPlugin from 'html-webpack-plugin'

import type { WebpackPluginInstance } from 'webpack'
import type { BuildOptions } from './types/config';

export function buildPlugins({paths}: BuildOptions): WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({ template: paths.html }), // плагин для создания html файла сборки
        new webpack.ProgressPlugin() // индикатор загрузки
    ]
}
