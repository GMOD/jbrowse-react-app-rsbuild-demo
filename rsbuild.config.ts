import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

export default defineConfig({
  plugins: [pluginReact()],
  output: {
    assetPrefix: 'auto',
  },
  html: {
    title: '@jbrowse/react-app rsbuild demo',
  },
  source: {
    // Add fallbacks for Node.js built-in modules
    alias: {
      // Set fs module to false in browser environment
      fs: false,
    },
  },
})
