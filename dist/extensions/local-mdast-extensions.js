import imputeHeadingId from '../transforms/impute-heading-id.js';
export default (({ prefix } = {}) => ({
    transforms: [imputeHeadingId(prefix)]
}));
