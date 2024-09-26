<script lang="ts">
	import mdast from '$lib/extensions/mdast.js';
	import { Markdown } from '@accuser/svelte-markdown-provider';
	import { gfmFromMarkdown } from 'mdast-util-gfm';
	import { gfm } from 'micromark-extension-gfm';
	import type { ComponentProps } from 'svelte';
	import Heading from './Heading.svelte';
	import ListItem from './ListItem.svelte';

	type Props = ComponentProps<Markdown>;

	let { components: _components = {}, directives, options: _options = {}, src }: Props = $props();

	let components = $derived.by(() => ({
		heading: Heading,
		listItem: ListItem,
		..._components
	}));

	let options = $derived.by(() => ({
		..._options,
		extensions: [...(_options.extensions ?? []), gfm()],
		mdastExtensions: [...(_options.mdastExtensions ?? []), gfmFromMarkdown(), mdast()]
	}));
</script>

<Markdown {components} {directives} {options} {src} />
