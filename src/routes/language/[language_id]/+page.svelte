<script lang="ts">
	import Page from '../../../Page.svelte';
	import ChapterButton from './ChapterButton.svelte';

	export let data;

	const id = data.language.id;
	let title = data.language.title;
	let subtitle = data.language.subtitle;

	let chapters = data.chapterIds.map((cid) => {
		return {
			label: cid,
			href: `/language/${id}/chapter/${cid}`
		};
	});
</script>

<Page {title} {subtitle}>
	<div class="button-container">
		{#each chapters as chapter (chapter.label)}
			<ChapterButton href={chapter.href}>
				{chapter.label}
			</ChapterButton>
		{/each}
	</div>
</Page>

<style>
	.button-container {
		text-align: center;
	}
</style>
