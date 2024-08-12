<script>
	export let inactive = false;
</script>

<div class="moveable" class:inactive on:click>
	<slot></slot>
</div>

<style>
	.moveable {
		display: inline-block;
		padding: 8px;
		border: 1px solid #aaa;
		box-shadow: 0 4px 0 #aaa;
		border-radius: 12px;
		margin-right: 4px;
		margin-bottom: 12px;
		background-color: white;
		transition: ease-out 0.1s all;
	}

	.moveable:hover {
		cursor: pointer;
	}

	.moveable:active:not(.inactive) {
		box-shadow: none;
		transform: translateY(4px);
	}

	.inactive {
		background-color: #aaa;
		color: #aaa;
	}
</style>
