const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const withImages = require('next-images');
const withPlugins = require("next-compose-plugins");
module.exports = {
    exportPathMap: function () {
        return {
            '/': { page: '/' }
        }
    }
}
module.exports = withPlugins([withCSS, withFonts, withImages]);