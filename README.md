<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Typed Array Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return a function which tests if every element in a [typed array][mdn-typed-array] passes a test condition.

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-tools-typed-array-function
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var typedarrayfcn = require( '@stdlib/assert-tools-typed-array-function' );
```

<a name="typedarrayfcn"></a>

#### typedarrayfcn( predicate )

Returns a function which tests if every element in a [`typed array`][mdn-typed-array] passes a test condition. Given an input [`typed array`][mdn-typed-array], the function returns `true` if all elements pass the test and `false` otherwise.

```javascript
var isOdd = require( '@stdlib/assert-is-odd' );
var Int32Array = require( '@stdlib/array-int32' );

var arr1 = new Int32Array( [ 1, 3, 5, 7 ] );
var arr2 = new Int32Array( [ 3, 5, 8 ] );

var f = typedarrayfcn( isOdd );

var bool = f( arr1 );
// returns true

bool = f( arr2 );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The returned function will return `false` if **not** provided a [`typed array`][mdn-typed-array].
-   The returned function will return `false` if provided an empty [`typed array`][mdn-typed-array].
-   A `predicate` function should accept a single argument: a [`typed array`][mdn-typed-array] element. If the element satisfies a test condition, the `predicate` function should return `true`; otherwise, the `predicate` function should return `false`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isEven = require( '@stdlib/assert-is-even' );
var Int32Array = require( '@stdlib/array-int32' );
var typedarrayfcn = require( '@stdlib/assert-tools-typed-array-function' );

var arr1;
var arr2;
var bool;
var f;
var i;

arr1 = new Int32Array( 25 );
for ( i = 0; i < arr1.length; i++ ) {
    arr1[ i ] = i;
}

arr2 = new Int32Array( 25 );
for ( i = 0; i < arr2.length; i++ ) {
    arr2[ i ] = 2 * i;
}

f = typedarrayfcn( isEven );

bool = f( arr1 );
// returns false

bool = f( arr2 );
// returns true
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-tools-typed-array-function.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-tools-typed-array-function

[test-image]: https://github.com/stdlib-js/assert-tools-typed-array-function/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-tools-typed-array-function/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-tools-typed-array-function/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-tools-typed-array-function?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-tools-typed-array-function.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-tools-typed-array-function/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-tools-typed-array-function/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-tools-typed-array-function/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-tools-typed-array-function/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-tools-typed-array-function/main/LICENSE

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays

</section>

<!-- /.links -->
