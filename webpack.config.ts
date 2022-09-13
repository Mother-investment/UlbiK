import path from 'path'
import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'

const config = {
    mode: 'development', // мод сборки ('development' / 'production')
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    plugins: [
        new HTMLWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }), // плагин для создания html файла сборки
        new webpack.ProgressPlugin() // индикатор загрузки
    ],
    module: {
        rules: [
            // обработка файлов, не являющихся js (ts, css,..)
            {
                test: /\.tsx?$/, // поиск файлов 'ts', 'tsx'
                use: 'ts-loader', // лоудер, который позволяет работать ts
                exclude: /node_modules/ // исключение из обработки
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'] // ртипы файлов, которым не нужно писать расширения при импорте ('./index' вместо './index.ts')
    },
    output: {
        filename: '[name].[contenthash].js', // файл сборки
        path: path.resolve(__dirname, 'build'), // папка сборки
        clean: true // очистка старых файлов сбоки
    }
}

export default config
