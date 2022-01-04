const mix = require('laravel-mix')
// eslint-disable-next-line no-unused-vars
const path = require('path')
const banner = require('./src/build/banner.js')
const JsDocPlugin = require('jsdoc-webpack-plugin')

mix.webpackConfig((webpack) => {
	return {
		plugins: [
		  	new webpack.BannerPlugin({
			 	banner: banner.getBanner
		  	}),
		  	new JsDocPlugin({
				conf: 'jsdoc.conf.js',
				cdw: '.',
				preserveTmpFile: false,
				recursive: true
			})
		]
	}
})

/**
 * Compilacion de Fascino
 */
mix.setPublicPath('dist')
// Fascino JS
mix.js('src/js/index.js', 'dist/js/fascino.js')
// Fascino All
   .js('src/_all.js', 'dist/js/fascino-all.js')
   // Plugins
   // --Ajax
   .js('src/js/plugins/ajax/index.js', 'dist/js/plugins/ajax/ajax.js')
   // File Upload
   .js('src/js/plugins/fileupload/index.js', 'dist/js/plugins/fileupload/file.js')
   .copy('node_modules/cropperjs/src/images/bg.png', 'dist/js/plugins/fileupload/images/bg.png')
   .sass('src/js/plugins/fileupload/file.scss', 'dist/js/plugins/fileupload/file.css')
   // ProgressBar
   .js('src/js/plugins/progressbar/index.js', 'dist/js/plugins/progressbar/ProgressBar.js')
   .sass('src/js/plugins/progressbar/Progress.scss', 'dist/js/plugins/progressbar/ProgressBar.css')
   // LightBox
   .js('src/js/plugins/lightbox/index.js', 'dist/js/plugins/lightbox/LightBox.js')
   .sass('src/js/plugins/lightbox/lightbox.scss', 'dist/js/plugins/lightbox/LightBox.css')
   .options({
   		processCssUrls: false
   	})
