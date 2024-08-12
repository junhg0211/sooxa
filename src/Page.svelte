<script lang="ts">
	import { goto } from '$app/navigation';

	export let title = '';
	export let subtitle = '';

	function back() {
		goto('/');
	}
</script>

<div>
	<div class="logo-bar">
		<div class="logo" on:click={back}>Sôxa</div>
	</div>
	<div class="content-container">
		<div class="content">
			<div class="title-container">
				{#if title}
					<div class="title">{title}</div>
				{/if}
				{#if subtitle}
					<div class="subtitle">{subtitle}</div>
				{/if}
			</div>
			<slot />
		</div>
	</div>
</div>

<style>
	.logo-bar {
		box-shadow: 0 0 4px #aaaaaa;
		padding: 12px 0;
	}

	.logo {
		text-align: center;
		color: var(--primary-color);
		font-weight: bold;
		font-size: 24px;
		cursor: pointer;
	}

	.content {
		max-width: 400px;
		margin: auto;
		margin-top: 100px;
	}

	.title-container {
		margin-bottom: 60px;
	}

	.title {
		font-size: 24px;
		font-weight: bold;
	}

	.subtitle {
		margin-top: 16px;
	}
</style>
