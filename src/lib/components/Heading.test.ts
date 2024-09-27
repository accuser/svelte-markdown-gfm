import { render } from '@testing-library/svelte';
import type { ComponentProps } from 'svelte';
import { describe, expect, test } from 'vitest';
import Heading from './Heading.svelte';

describe('Heading.svelte', async () => {
	for (const depth of [1, 2, 3, 4, 5, 6] as const) {
		const it = test.extend<{
			props: ComponentProps<Heading>;
		}>({
			props: {
				type: 'heading',
				children: [{ type: 'text', value: 'Hello, World!' }],
				data: { id: 'hello-world' },
				depth
			}
		});

		it(`renders <h${depth}>`, async ({ props }) => {
			const { container } = render(Heading, { props });

			expect(container.querySelector(`h${depth}`)).toBeInTheDocument();
		});

		it(`renders <h${depth}> with \`id\` attibute`, async ({ props }) => {
			const { container } = render(Heading, { props });

			expect(container.querySelector(`h${depth}`)).toHaveAttribute('id', 'hello-world');
		});

		it(`renders <h${depth}> with content`, async ({ props }) => {
			const { container } = render(Heading, { props });

			expect(container.querySelector(`h${depth}`)).toHaveTextContent('Hello, World!');
		});
	}
});
