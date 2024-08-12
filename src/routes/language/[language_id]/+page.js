import { error } from '@sveltejs/kit';
import chapters from '$lib/chapters.json';
import languages from '$lib/languages.json';

export function load({ params }) {
	let languageId = params.language_id;
	let language = languages.filter((language) => language.id === languageId)[0];

	if (language === undefined) {
		error(404, { message: 'not found' });
	}

	const chapterIds = chapters.filter((c) => c.language_id === languageId).map((c) => c.id);

	return { language, chapterIds };
}
