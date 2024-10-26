import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-node';
import { execSync } from 'child_process';

// Function to get the current Git commit hash
function getGitRevision() {
	try {
		return execSync('git rev-parse --short HEAD').toString().trim();
	} catch (e) {
		console.warn('Unable to get Git revision, using current timestamp');
		return Date.now().toString();
	}
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex(mdsvexConfig)
	],

	kit: {
		adapter: adapter(),
		// TODO remove this if you don't want prerendering
		/* 	prerender: {
			entries: ['*', '/sitemap.xml', '/rss.xml']
		} */
		version: {
			name: getGitRevision(),
			pollInterval: 0
		}
	}
};

export default config;
