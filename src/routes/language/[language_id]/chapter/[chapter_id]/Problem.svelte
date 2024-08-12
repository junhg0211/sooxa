<script lang="ts">
	export let question;
	export let sentence;
</script>

<div>
	<div class="upper">
		<div class="question">{question}</div>
		<div class="sentence">{sentence}</div>
	</div>
	<slot></slot>
</div>

<style>
	.question {
		text-align: center;
		font-size: 12px;
		margin-bottom: 16px;
	}

	.sentence {
		text-align: center;
		font-size: 20px;
		font-weight: bold;
	}

	.upper {
		margin-bottom: 100px;
	}
</style>
