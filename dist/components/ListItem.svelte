<script lang="ts">
	import { Node } from '@accuser/svelte-markdown-provider';
	import type { ListItem } from 'mdast';

	let { checked, children, spread }: ListItem = $props();
</script>

<input checked={true} disabled />

<li>
	{#if typeof checked === 'boolean'}<input type="checkbox" {checked} disabled />{/if}
	{#each children as node}<Node {...node} />{/each}
</li>
