const pkg = require('./../../package.json')
year = new Date().getFullYear()
getBanner = (pluginsFileName) => {
	let name = pluginsFileName.chunk.name,
		plgName = ''
	if (pluginsFileName) {
		if (name !== '/js/fascino') {
			if (name.indexOf('fascino-all') > -1) {
				plgName = 'All'
			} else {
				let arrName = name.indexOf('/') > -1 ? name.split('/') : [name]
				plgName = arrName[ arrName.length - 1]
			}
		}
	}
	
	return `
	Fascino ${plgName} (${pkg.homepage})
	@version v${pkg.version}
	@copyright 2020-${year} Sviluppo Web (https://svilupporep.site)
	@author ${pkg.author}
	${pkg.contributors.length > 0 ? `Contributors ${pkg.contributors.join(', ')}` : ''}
	@license Licensed under MIT`
}

module.exports.getBanner = getBanner
