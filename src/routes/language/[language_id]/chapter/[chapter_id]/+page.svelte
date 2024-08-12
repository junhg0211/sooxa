<script lang="ts">
	import Page from '../../../../../Page.svelte';
	import TranslateProblem from './TranslateProblem.svelte';
	import ArrangeProblem from './ArrangeProblem.svelte';
	import AnswerProblem from './AnswerProblem.svelte';
	import { TRANSLATE, ARRANGE, ANSWER } from './const.ts';

	export let data;

	const chapter = data.chapter;
</script>

<Page>
	{#if chapter.type === TRANSLATE}
		<TranslateProblem sentence={chapter.sentence} sentences={chapter.sentences} />
	{:else if chapter.type === ARRANGE}
		<ArrangeProblem sentence={chapter.sentence} words={chapter.words} />
	{:else if chapter.type === ANSWER}
		<AnswerProblem sentence={chapter.sentence} sentences={chapter.sentences} />
	{/if}
</Page>
