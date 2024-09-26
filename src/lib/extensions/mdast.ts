import imputeHeadingId from '$lib/transforms/impute-heading-id.js';
import type { Extension } from 'mdast-util-from-markdown';

type Options = {
	prefix?: string;
};

export default (({ prefix } = {}) => ({
	transforms: [imputeHeadingId(prefix)]
})) satisfies (options?: Options) => Extension;
