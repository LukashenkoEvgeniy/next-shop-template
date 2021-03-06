const withSass = require('@zeit/next-sass');
const path = require('path')

module.exports = withSass({

    webpack(config, options) {
        config.resolve.alias['@'] = path.join(__dirname)
        return config
    },

});
