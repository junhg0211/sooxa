<script lang="ts">
	import { goto } from '$app/navigation';

	export let title;
	export let subtitle;
	export let src;
	export let id;
</script>

<div class="panel" on:click={() => goto(`/language/${id}`)}>
	<div class="flag-div">
		<img {src} class="flag" />
	</div>
	<div class="text-div">
		<div class="title">{title}</div>
		<div class="subtitle">{subtitle}</div>
	</div>
</div>

<style>
	.panel {
		height: 60px;
		display: flex;
		padding: 20px;
		border-radius: 12px;
		border: 1px solid #eee;
		transition: ease-out 0.2s all;
	}

	.panel:hover {
		background-color: #eee;
		cursor: pointer;
	}

	.flag {
		height: 60px;
	}

	.text-div {
		margin-left: 32px;
		align-content: center;
	}

	.title {
		font-weight: bold;
	}
</style>
