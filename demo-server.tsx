import { useState, useEffect } from "react";
import { render, Text } from "ink";
import { EventEmitter } from "node:events";

// Counter updates when Bun receives a HTTP request.
// Run e.g. curl localhost:3000 to update the counter

const emitter = new EventEmitter();

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    emitter.on("count", () => {
      setCounter((previousCounter) => previousCounter + 1);
    });
  }, []);

  return <Text color="green">{counter}</Text>;
};

render(<Counter />);

Bun.serve({
  port: 3000,
  fetch(req) {
    emitter.emit("count");
    return new Response(`Hello world`);
  },
});
