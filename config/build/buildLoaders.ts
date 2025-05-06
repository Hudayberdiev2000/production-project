import webpack from "webpack"
import { BuildOptions } from "./types/config"
import buildCssLoaders from "./loaders/buildCssLoaders";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }

  const styleLoader = buildCssLoaders(options.isDev)

  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  }

  return [typeScriptLoader, styleLoader, fileLoader, svgLoader]
}
