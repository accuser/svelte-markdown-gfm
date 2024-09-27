<script lang="ts">
	import { Node } from '@accuser/svelte-markdown-provider';
	import type { Heading } from 'mdast';

	let { children, data, depth }: Heading = $props();

	let id = $derived(data?.id);
	let tag = $derived.by(() => `h${depth}`);
</script>

<svelte:element this={tag} {id}
	>{#each children as node}<Node {...node} />{/each}</svelte:element
>
