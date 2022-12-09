import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-static';
// was "@sveltejs/adapter-auto"

const dev = 'production' === 'development';

/** @type {import(""@sveltejs/kit").Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: null,
			precompress: false,
			strict: true
		})
		// hydrate the <div id="svelte"> element in src/app.html
		// target: "#svelte"
	},

	preprocess: [mdsvex(mdsvexConfig)]
	// preprocess: [
    //     preprocess({
    //         postcss: true
    //     }),
    //     mdsvex(mdsvexConfig)
    // ]
};

export default config;
