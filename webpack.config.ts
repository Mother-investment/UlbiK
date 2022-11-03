import path from 'path'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'

import type { Configuration } from 'webpack'
import type { BuildEnv, BuildPaths } from './config/build/types/config'

export default (env: BuildEnv): Configuration => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    }


    const mode = env.mode || 'development'
    const PORT = env.port || 3000
    const apiUrl = env.apiUrl || 'http://localhost:8000'

    const isDev = mode === 'development'

    const config: Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        apiUrl
    })
    return config
}
