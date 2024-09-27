<script lang="ts">
	import localMdastExtensions from '$lib/extensions/local-mdast-extensions.js';
	import { Markdown } from '@accuser/svelte-markdown-provider';
	import { gfmFromMarkdown } from 'mdast-util-gfm';
	import { gfm } from 'micromark-extension-gfm';
	import type { ComponentProps } from 'svelte';
	import Heading from './Heading.svelte';
	import ListItem from './ListItem.svelte';

	type Props = ComponentProps<Markdown>;

	let { ast, components: _components, directives, options: _options, src }: Props = $props();

	let components = $derived.by(() => {
		const { ...rest } = _components ?? {};

		return {
			heading: Heading,
			listItem: ListItem,
			...rest
		};
	});

	let options = $derived.by(() => {
		const { extensions = [], mdastExtensions = [], ...rest } = _options ?? {};

		return {
			extensions: [...extensions, gfm()],
			mdastExtensions: [...mdastExtensions, gfmFromMarkdown(), localMdastExtensions()],
			...rest
		};
	});
</script>

<Markdown {components} {directives} {options} {src} />
