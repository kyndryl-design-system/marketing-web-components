# Shidoka Web Components for Content

[![shidoka-content](https://github.com/kyndryl-design-system/shidoka-content/actions/workflows/actions.yml/badge.svg)](https://github.com/kyndryl-design-system/shidoka-content/actions/workflows/actions.yml)

# Contributing to this project

Read the [Contributing Guide](https://github.com/kyndryl-design-system/shidoka-content/blob/beta/CONTRIBUTING.md) here.

# Using this library in another project

## Install the package

<!-- Note: This will not work until you have configured the enterprise package registry following the instructions above. -->

```bash
# stable/main
npm install @kyndryl-design-system/shidoka-content @kyndryl-design-system/shidoka-foundation -S

# beta (use until first stable release)
npm install @kyndryl-design-system/shidoka-content@beta @kyndryl-design-system/shidoka-foundation@beta -S
# when using beta, lock the version, as breaking changes can happen at any time
```

## Import the root stylesheet to your app's global styles

The method used (SCSS @use, CSS @import, JS import, or &lt;style&gt; tag) will vary based on your framework/bundler. Some examples:

### SCSS

```css
@use '~@kyndryl-design-system/shidoka-foundation/scss/root.scss';
```

### CSS

```css
@import '@kyndryl-design-system/shidoka-foundation/css/root.css';
```

### JS

```js
import '@kyndryl-design-system/shidoka-foundation/css/root.css';
```

### Use CSS tokens/variables

You can make use of tokens/variables included in root.css such as any of the color tokens.

## Start using components

See [Storybook](https://kyndryl-design-system.github.io/shidoka-content/) for the full components documentation.

### Example

```js
import '@kyndryl-design-system/shidoka-content/components/alternatingFeatureWithImage';
```

```html
<kd-alternating-feature-with-image>
  <!-- content here -->
</kd-alternating-feature-with-image>
```

### React usage

React does not yet support automatic interop with Web Components. This means that React treats all props passed to Web Components as string attributes. It sounds like they are [planning to release it eventually](https://github.com/facebook/react/issues/11347#issuecomment-988970952), and is now available behind an `@experimental` flag. Until you've upgraded to a version of React that has support, you will need to use a library like [@lit/react](https://www.npmjs.com/package/@lit/react) to use these components in React.

Some options for React wrapper libraries:

1. [@lit/react](https://www.npmjs.com/package/@lit/react)
2. [reactify-wc](https://www.npmjs.com/package/reactify-wc)
3. [wc-react](https://www.npmjs.com/package/wc-react)

### Server-Side Rendering (SSR)

When using with an SSR framework like Next.js, you will encounter errors with code that only runs client-side, like `window` references for example. This is because web components cannot render on the server. Here is an article that provides some methods to work around this: [Using Non-SSR Friendly Components with Next.js](https://blog.bitsrc.io/using-non-ssr-friendly-components-with-next-js-916f38e8992c) and [How to entirely disable server-side rendering in next.js v13?](https://stackoverflow.com/questions/75406728/how-to-entirely-disable-server-side-rendering-in-next-js-v13). Basically, they need their rendering deferred to only happen on the client-side.

Here is some additional information about why SSR does not work for web components, and some potential polyfills/solutions to enable server rendering: https://lit.dev/docs/ssr/overview/
