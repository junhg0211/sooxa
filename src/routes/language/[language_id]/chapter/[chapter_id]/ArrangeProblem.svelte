<script>
	import Problem from './Problem.svelte';
	import Moveable from './Moveable.svelte';

	export let sentence;
	export let words;

	let buttons = [];
	let answers = [];

	for (let i = 0; i < words.length; i++) {
		buttons.push({ text: words[i], inactive: false });
	}

	function moveUp(label) {
		let index = -1;
		for (let i = 0; i < buttons.length; i++) {
			if (buttons[i].text === label) {
				index = i;
				break;
			}
		}
		if (index === -1) return;

		if (buttons[index].inactive) return;

		buttons[index].inactive = true;

		answers = [...answers, buttons[index]];
	}

	function moveDown(label) {
		answers = answers.filter((button) => button.text !== label);

		let downIndex = -1;
		for (let i = 0; i < buttons.length; i++) {
			if (buttons[i].text === label) {
				downIndex = i;
				break;
			}
		}
		if (downIndex === -1) return;
		buttons[downIndex].inactive = false;
	}
</script>

<Problem question="다음 문장을 작문하세요." sentence="“{sentence}”">
	<div class="answer-area">
		{#each answers as label (label.text)}
			<Moveable on:click={() => moveDown(label.text)}>
				{label.text}
			</Moveable>
		{/each}
	</div>
	<div class="buttons-area">
		{#each buttons as label (label.text)}
			<Moveable inactive={label.inactive} on:click={() => moveUp(label.text)}>
				{label.text}
			</Moveable>
		{/each}
	</div>
</Problem>

<style>
	.answer-area {
		background-color: #eee;
		height: 150px;
		padding: 8px;
		border-radius: 12px;
		border: 1px solid #aaa;
	}

	.buttons-area {
		margin-top: 40px;
		text-align: center;
	}
</style>
