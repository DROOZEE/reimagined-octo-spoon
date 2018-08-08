const routes = module.exports = require('next-routes')()

routes
// .add('portfolio', '/portfolio/:name', 'case')
.add('maincode', '/portfolio/maincode', 'case1')
.add('seveda', '/portfolio/seveda', 'case2')
.add('tokein', '/portfolio/tokein', 'case3')
.add('needle', '/portfolio/needle', 'case4')
.add('synestesia', '/portfolio/synesthesia', 'case5')
.add('bitclave', '/portfolio/bitclave', 'case6')
.add('pandora', '/portfolio/pandora', 'case7')
.add('join-us', '/careers/join-us', 'jointeam')
