# Demos of Ink library running on Bun

**Ink on Bun doesn't require compilation step!**

[Ink](https://www.npmjs.com/package/ink) is a [React](https://react.dev/) renderer that allows building command-line [text-based applications](https://en.wikipedia.org/wiki/Text-based_user_interface) from React components - just like regular raw React allows building HTML pages by assembling them from components.

[Bun](https://bun.sh/) is a new JavaScript runtime with built-in TypeScript, React transpiling and other useful features built in.

Ink works with Bun **without any additional configuration**. When running on Node.js, it's required to install Babel and add a transpilation step. On Bun, it runs without any additional build steps - just install required packages with `bun install ink react @types/react` and create an entry file ending with `.tsx`.

**Some parts are not working yet** - particularly **input**.

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

### Only displaying data

1. `demos-display/1-hello-world` - simplest example; it returns immediately because it doesn't run any permanent task
2. `demos-display/2-interval` - simple counter, adapted from Ink's documentation
3. `demos-display/3-layout` - example showing how to use layout
4. `demos-display/4-layout-scroll` - example of a fixed-size scrolling element
5. `demos-display/5-fullscreen` - example of an application automatically resizing to fill the whole screen
6. `demos-display/6-server` - example of Ink running together with a HTTP server; this can be used e.g. to display data received from an external service

## Data input

Data input using `useInput` **doesn't work**, no key is intercepted. Tested on Bun 1.0.18.

## Full height

The officially recommended way to support fullscreen is an additional [ink-use-stdout-dimensions](https://github.com/cameronhunter/ink-monorepo/tree/master/packages/ink-use-stdout-dimensions) library. Unfortunately, as of `ink-use-stdout-dimensions` version 1.0.5, and Bun 1.0.3, on Ubuntu Mate 22.04 at least, using this library results in an error:

```
Segmentation fault (core dumped)
```

Fortunately, implementing this functionality manually, using `process.stdout`, doesn't cause that error and works correctly - as demonstrated in `demo-fullscreen`:

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

Using `useStdout` from Ink library won't work, because `stdout` obtained from this hook doesn't have `rows` propserty.
