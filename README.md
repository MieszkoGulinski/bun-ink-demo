# Ink works with Bun natively without any configuration!

[Ink](https://www.npmjs.com/package/ink) is a [React](https://react.dev/) renderer that allows building command-line [text-based applications](https://en.wikipedia.org/wiki/Text-based_user_interface) from React components - just like regular raw React allows building HTML pages by assembling them from components.

[Bun](https://bun.sh/) is a new JavaScript runtime with built-in TypeScript, React transpiling and other useful features built in.

Ink works with Bun **without any additional configuration**. When running on Node.js, it's required to install Babel and add a transpilation step. On Bun, it runs without any additional build steps - just install required packages with `bun install ink react @types/react` and create an entry file ending with `.tsx`.

## How to run

After cloning the repository, install the dependencies:

```bash
bun install
```

To run a demo:

```bash
bun demo-hello-world.tsx
bun demo-interval.tsx
```

etc.

## Demos

- `demo-hello-world` - simplest example; it returns immediately because it doesn't run any permanent task
- `demo-interval` - simple counter, adapted from Ink's documentation
- `demo-layout` - example showing how to use layout
- `demo-layout-scroll` - example of a fixed-size scrolling element

## Limitation

It's not clear from the documentation how to make full-screen application taking full height of the screen
