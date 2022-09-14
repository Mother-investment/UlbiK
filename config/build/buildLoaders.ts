import type { RuleSetRule } from "webpack"


export function buildLoaders(): RuleSetRule[] {

    const typescriptLoader = {
        test: /\.tsx?$/, // поиск файлов 'ts', 'tsx'
        use: 'ts-loader', // лоудер, который позволяет работать ts
        exclude: /node_modules/ // исключение из обработки
    }
    const cssLoader = {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader"
      ]
    }

  return [typescriptLoader, cssLoader]
}
