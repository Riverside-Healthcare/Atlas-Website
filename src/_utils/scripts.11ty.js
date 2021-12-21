const esbuild = require('esbuild')

const generateContentHash = require('../lib/generateContentHash');
module.exports = class {
  data() {
    return {
      permalink:  `/static/js/${generateContentHash('src/static/js/**/*.js')}.js`,
      eleventyExcludeFromCollections: true
    }
  }


  async render() {
    await esbuild.build({
      entryPoints: ['src/static/js/collapse.js'],
      inject: ['./src/static/js/search.js','./src/static/js/tabs.js','./src/static/js/hamburger.js','./src/static/js/animate.js','./src/static/js/modal.js'],
      bundle: true,
      minify: true,
      outfile: `_site/static/js/${generateContentHash('src/static/js/**/*.js')}.js`,
      sourcemap: false,
      target: 'es5'
    })
  }
}
