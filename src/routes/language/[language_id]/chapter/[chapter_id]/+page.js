import { error } from '@sveltejs/kit';
import chapters from '$lib/chapters.json';
import languages from '$lib/languages.json';

export function load({ params }) {
	let languageId = params.language_id;
	let language = languages.filter((language) => language.id === languageId)[0];

	let chapterId = params.chapter_id;
	let chapter = chapters.filter((c) => c.id === chapterId && c.language_id === languageId)[0] || {};

	return { language, chapter };
}
