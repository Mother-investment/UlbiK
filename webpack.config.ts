import path from 'path'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'

import type { Configuration } from 'webpack'
import type { BuildEnv, BuildPath } from './config/build/types/config'

export default (env: BuildEnv): Configuration => {
    const paths: BuildPath = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }

    const mode = env.mode || 'development'
    const isDev = mode === 'development'
    const PORT = env.port || 3000

    const config: Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT
    })
    return config
}
