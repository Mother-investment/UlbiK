import type { RuleSetRule } from "webpack"


export function buildLoaders(): RuleSetRule[] {

    const typescriptLoader = {
        test: /\.tsx?$/, // поиск файлов 'ts', 'tsx'
        use: 'ts-loader', // лоудер, который позволяет работать ts
        exclude: /node_modules/ // исключение из обработки
    }

  return [typescriptLoader]
}
