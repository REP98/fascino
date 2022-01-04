module.exports = {
	plugins: ['plugins/markdown'],
	source: {
		include: ['./src/'],
		includePattern: '.+\\.js(doc|x)?$',
		exclude: ['./node_modules/', './src/build/', './src/_jsdocstheme/', './src/_jsdocstheme/'],
		excludePattern: '(^|\\/|\\\\)_'
	},
	sourceType: 'module',
	tags: {
		allowUnknownTags: true,
		dictionaries: ['jsdoc', 'closure']
	},
	opts: {
		template: './src/_jsdocstheme',
		encoding: 'utf8',
		destination: './docs/api/',
		readme: './docs/README.md',
		private: true
	},
	templates: {
		cleverLinks: false,
		monospaceLinks: false,
		systemName: 'Fascino',
		default: {
			outputSourceFiles: false,
			search: true,
			includeDate: true
		}
	},
	compilerOptions: {
		module: 'commonjs',
		target: 'es2020',
		jsx: 'preserve',
		strictFunctionTypes: true
 	}
}
