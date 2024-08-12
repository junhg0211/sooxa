<script lang="ts">
	import Page from '../Page.svelte';
	import LanguagePanel from './LanguagePanel.svelte';

	import languages from '$lib/languages.json';
</script>

<Page title="언어">
	{#each languages as language (language.id)}
		<LanguagePanel
			title={language.title}
			subtitle={language.subtitle}
			src={`/src/lib/drawable/flag/${language.id}.svg`}
			id={language.id}
		/>
	{/each}
</Page>
