<script lang="ts" module>
	export type Props = import('mdast').Heading;
</script>

<script lang="ts">
	import { Node } from '@accuser/svelte-markdown-provider';

	let { children, data, depth }: Props = $props();

	let { id } = $derived(data as import('mdast').HeadingData);
	let tag = $derived.by(() => `h${depth}`);
</script>

<svelte:element this={tag} {id}
	>{#each children as node}<Node {...node} />{/each}</svelte:element
>
