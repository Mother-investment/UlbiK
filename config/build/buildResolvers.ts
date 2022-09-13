import type { ResolveOptions } from "webpack";

export function buildResolvers():ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'] // типы файлов, которым не нужно писать расширения при импорте ('./index' вместо './index.ts')
    }
}
