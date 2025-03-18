import { posts } from './data.js';

export function load() {
	return {
		summaries: posts.map((post) => ({
			slug: post.slug,
			date:post.date,
            content:post.content,
            summary:post.summary
		}))
	};
}
