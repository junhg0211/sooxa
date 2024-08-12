<script>
	import { goto } from '$app/navigation';

	export let href;

	function redirect() {
		goto(href);
	}
</script>

<div class="button" on:click={redirect}>
	<span class="button-label">
		<slot></slot>
	</span>
</div>

<style>
	.button {
		width: 60px;
		height: 60px;
		display: inline-block;
		margin-right: 20px;
		margin-bottom: 40px;
		background-color: #eee;
		border: 1px solid #aaa;
		box-shadow: 0 4px 0 #aaa;
		border-radius: 60px;
		text-align: center;
		line-height: 60px;
		font-size: 20px;
		font-weight: bold;
		transition: ease-out 0.1s all;
	}

	.button:hover {
		cursor: pointer;
	}

	.button:active {
		transform: translateY(4px);
		box-shadow: none;
	}
</style>
