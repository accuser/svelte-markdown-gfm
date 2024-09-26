declare module 'mdast' {
    interface HeadingData {
        id: string;
    }
}
declare const _default: (prefix: string | undefined) => (root: import("mdast").Root) => void;
export default _default;
