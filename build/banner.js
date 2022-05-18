
const pkg = require('../package.json')
const year = new Date().getFullYear()

function getBanner (pluginFilename) {
	return `/**
	* Fascino ${pluginFilename ? ` ${pluginFilename}` : ''} 
	* @version v${pkg.version}
	* @copyright 2021-${year} Robert Pérez.
	* @author ${pkg.author}
	* ${pkg.contributors.length > 0 ? `Contributors ${pkg.contributors.join(', ')}` : ''}
	* @license Licensed under MIT
	*/`
}

module.exports = getBanner