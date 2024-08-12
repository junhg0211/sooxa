<script lang="ts">
	export let selected = false;
</script>

<div class="clickable-long" class:selected on:click>
	<slot></slot>
</div>

<style>
	.clickable-long {
		padding: 12px;
		border: 1px solid #aaa;
		border-radius: 12px;
		box-shadow: 0 4px 0 #aaa;
		margin-bottom: 24px;
		transition: ease-out 0.1s all;
	}

	.clickable-long:hover {
		cursor: pointer;
	}

	.clickable-long:active {
		box-shadow: none;
		transform: translateY(4px);
	}

	.selected {
		border-color: #f55;
		box-shadow: 0 4px 0 #f55;
	}
</style>
