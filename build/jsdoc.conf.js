const path = require('path');

module.exports = {
	plugins: ['plugins/markdown'],
	source: {
		include: ['./src/', "package.json", "README.md"],
		includePattern: '.+\\.js(doc|x)?$',
		exclude: ['./node_modules/'],
		excludePattern: '(^|\\/|\\\\)_'
	},
	sourceType: 'module',
	tags: {
		allowUnknownTags: true,
		dictionaries: ['jsdoc', 'closure']
	},
	opts: {
		template: "./node_modules/clean-jsdoc-theme",
		encoding: 'utf8',
		destination: './docs/',
		readme: './README.md',
		recurse: true,
        verbose: true,
        tutorials: "./docs/examples",
        theme_opts:{
        	theme: 'dark',
        	title: `<img src="assets/Images/logo_white_512.png" loading="lazy" height="36" style="max-width: 100%; margin-right: .8rem;" /> <span style="color: #fff">FascinoJs</span>`,
        	favicon: 'assets/Images/logo_white_512.png',
      		menu: [
      			{
					title: "Github",
					link: "https://github.com/REP98/fascino",
					target: "_blank"
				},
				{
					title: "NPM",
					link: "https://www.npmjs.com/package/fascino",
					target: "_blank"
				},
				{
					title: "jsDelvir",
					link: "https://www.jsdelivr.com/package/npm/fascino?version=1.0.1",
					target: "_blank"
				}
      		],
      		meta:[
      			{
      				name: "author",
      				content: "Robert Pérez"
      			},
      			{
      				name: "description",
      				content: "Documentación Oficial de la Librería Javacript Fascino JS"
      			},
      			{
      				property: "og:title",
      				content: "FascinoJs"
      			},
      			{
      				property: "og:description",
      				content: "Documentación Oficial de la Librería Javacript Fascino JS"
      			},
      			{
      				property: "og:type",
      				content: "website"
      			},
      			{
      				property: "og:url",
      				content: "https://github.com/REP98/fascino"
      			},
      			{
      				property: "og:site_name",
      				content: "FascinoJs"
      			},
      			{
      				property: "og:image",
      				content: "assets/Images/FAS.png"
      			},
      			{
      				property: "og:image:width",
      				content: "512"
      			},
      			{
      				property: "og:image:height",
      				content: "512"
      			},
      			{
      				name: "twitter:card",
      				content: "summary_large_image"
      			},
      			{
      				name: "twitter:creator",
      				content: "@Robert_saer"
      			},
      			{
      				name: "twitter:site",
      				content: "https://github.com/REP98/fascino"
      			},
      			{
      				name: "twitter:title",
      				content: "FascinoJs"
      			},
      			{
      				name: "twitter:description",
      				content: "Documentación Oficial de la Librería Javacript Fascino JS"
      			},
      			{
      				name: "theme-color",
      				content: "#000"
      			}
      		],
        	footer:`&copy; 2020-${new Date().getFullYear()} FascinoJs.`,
        	include_js:[
        		"./dist/fascino-all-umd.min.js"
        	],
        	static_dir:['./assets']
        }
	},
	templates: {
		cleverLinks: false,
		monospaceLinks: false,
		systemName: 'FascinoJs',
		
	},
	compilerOptions:{
		module: 'esmac',
		jsx: 'preserve',
		strictFunctionTypes: true
	}
}

/*
,
	compilerOptions: {
		module: 'commonjs',
		target: 'es2020',
		jsx: 'preserve',
		strictFunctionTypes: true
 	}
 */