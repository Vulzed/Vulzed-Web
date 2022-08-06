import {build, defineConfig} from 'vite'
import 'vite/modulepreload-polyfill'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]


})

build.assetsDir = '../../resources/static/assets'
build.outputDir = '../../resources/templates'
