<script>
	import { goto } from '$app/navigation';
	import Page from '../../../Page.svelte';

	function back() {
		goto('/');
	}
</script>

<Page title="404">
	<div>언어 정보를 찾을 수 없습니다.</div>
	<div><a on:click={back} href="#">[돌아가기]</a></div>
</Page>
