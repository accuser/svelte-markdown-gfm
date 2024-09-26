type Options = {
    prefix?: string;
};
declare const _default: ({ prefix }?: Options | undefined) => {
    transforms: ((root: import("mdast").Root) => void)[];
};
export default _default;
