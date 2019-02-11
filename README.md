# PostCSS Rem2rpx [![Build Status][ci-img]][ci]

[PostCSS] plugin converts rem directly to rpx for Wechat MiniProgram.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/oranzhang/postcss-rem2rpx.svg
[ci]:      https://travis-ci.org/oranzhang/postcss-rem2rpx

```css
.foo {
    /* Input example */
}
```

```css
.foo {
  /* Output example */
}
```

## Usage

```js
postcss([ require('postcss-rem2rpx') ])
```

See [PostCSS] docs for examples for your environment.
