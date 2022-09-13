import path from 'path'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'

import type { Configuration } from 'webpack'
import type { BuildPath } from './config/build/types/config'

const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
}

const mode = 'development'
const isDev = mode === 'development'

const config: Configuration = buildWebpackConfig({
    mode: 'development',
    paths,
    isDev
})

export default config
