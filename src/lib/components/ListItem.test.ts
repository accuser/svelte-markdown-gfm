import { render } from '@testing-library/svelte';
import type { ComponentProps } from 'svelte';
import { describe, expect, test } from 'vitest';
import ListItem from './ListItem.svelte';

describe('Heading.svelte', async () => {
	describe('without `checked` prop', async () => {
		const it = test.extend<{
			props: ComponentProps<ListItem>;
		}>({
			props: {
				type: 'listItem',
				children: [
					{
						type: 'paragraph',
						children: [{ type: 'text', value: 'Hello, World!' }]
					}
				]
			}
		});

		it('renders <li>', async ({ props }) => {
			const { container } = render(ListItem, { props });

			expect(container.querySelector(`li`)).toBeInTheDocument();
		});

		it('renders <li> without <input type="checkbox">', async ({ props }) => {
			const { container } = render(ListItem, { props });

			expect(container.querySelector(`li > input[type='checkbox']`)).not.toBeInTheDocument();
		});

		it('renders <li> with content', async ({ props }) => {
			const { container } = render(ListItem, { props });

			expect(container.querySelector(`li`)).toHaveTextContent('Hello, World!');
		});
	});

	describe('with `checked` prop', async () => {
		for (const checked of [false, true] as const) {
			const it = test.extend<{
				props: ComponentProps<ListItem>;
			}>({
				props: {
					type: 'listItem',
					children: [
						{
							type: 'paragraph',
							children: [{ type: 'text', value: 'Hello, World!' }]
						}
					],
					checked
				}
			});

			it('renders <li>', async ({ props }) => {
				const { container } = render(ListItem, { props });

				expect(container.querySelector(`li`)).toBeInTheDocument();
			});

			it('renders <li> with <input type="checkbox">', async ({ props }) => {
				const { container } = render(ListItem, { props });

				expect(container.querySelector(`li > input[type='checkbox']`)).toBeInTheDocument();
			});

			it('renders <li> with <input type="checkbox"> and `disabled` attribute`', async ({
				props
			}) => {
				const { container } = render(ListItem, { props });

				expect(container.querySelector(`li > input[type='checkbox']`)).toHaveAttribute('disabled');
			});

			it('renders <li> with content', async ({ props }) => {
				const { container } = render(ListItem, { props });

				expect(container.querySelector(`li`)).toHaveTextContent('Hello, World!');
			});
		}
	});
});
