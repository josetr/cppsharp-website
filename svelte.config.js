import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

// https://kit.svelte.dev/docs/configuration
/** @type {import('@sveltejs/kit').Config} */
const config = {
  // https://github.com/sveltejs/svelte-preprocess
  preprocess: preprocess(),

  compilerOptions: {
    cssHash: ({ hash, css }) => 's' + hash(css)
  },

  kit: {
    appDir: '_app',
    paths: {
      base: process.env.CI === 'true' ? '/CppSharp' : ''
    },
    trailingSlash: 'ignore',
    adapter: adapter({}),
    prerender: {
      default: true
    },
    inlineStyleThreshold: 2048,
    browser: {
      hydrate: false,
      router: false
    }
  }
};

export default config;
