// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function e(e){if("function"!=typeof e)throw new TypeError(t("invalid argument. Must provide a function. Value: `%s`.",e));return function(t){var n,i;if(!r(t))return!1;if(0===(n=t.length))return!1;for(i=0;i<n;i++)if(!1===e(t[i]))return!1;return!0}}export{e as default};
//# sourceMappingURL=index.mjs.map
