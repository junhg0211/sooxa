<script>
	import Problem from './Problem.svelte';
	import ClickableLong from './ClickableLong.svelte';

	export let sentence;
	export let sentences = [];

	let selected = '';
</script>

<Problem question="다음 문장과 같은 뜻을 선택하세요." sentence="“{sentence}”">
	{#each sentences as sentence}
		<ClickableLong
			selected={selected === sentence}
			on:click={() => {
				selected = sentence;
			}}>{sentence}</ClickableLong
		>
	{/each}
</Problem>
