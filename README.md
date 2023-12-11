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
- `demo-fullscreen` - example of an application automatically resizing to fill the whole screen

## Full height

The officially recommended way to support fullscreen is an additional [ink-use-stdout-dimensions](https://github.com/cameronhunter/ink-monorepo/tree/master/packages/ink-use-stdout-dimensions) library. Unfortunately, as of `ink-use-stdout-dimensions` version 1.0.5, and Bun 1.0.3, on Ubuntu Mate 22.04 at least, using this library results in an error:

```
Segmentation fault (core dumped)
```

Fortunately, implementing this functionality manually doesn't cause that error - as demonstrated in `demo-fullscreen`:

```js
const useTerminalHeight = () => {
  const [height, setHeight] = useState(process.stdout.rows);

  useEffect(() => {
    process.stdout.on("resize", () => {
      setHeight(process.stdout.rows);
    });
  }, []);

  return height;
};
```
