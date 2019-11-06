// ---------------------------------------------------
//   Custom config for fixing VS Code parsing the SCSS
//   inside the <style> tag of the .svelte file
// ---------------------------------------------------

const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: sveltePreprocess({
    scss: {
      includePaths: ['src']
    },
    postcss: {
      plugins: [require('autoprefixer')]
    }
  })
};
