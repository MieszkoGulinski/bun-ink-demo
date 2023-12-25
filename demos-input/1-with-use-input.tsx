// IMPORTANT: this code DOESN'T WORK on Bun, at least 1.0.20, useInput doesn't detect any key press

import { useState, useEffect } from "react";
import { render, Text, useInput } from "ink";

const Counter = () => {
  const [pressedKeysCounter, setPressedKeysCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      // nothing, just to keep the app running
    }, 1000);
  }, []);

  useInput((input, key) => {
    setPressedKeysCounter((prevValue) => prevValue + 1);
  });

  return <Text color="green">Count of pressed keys: {pressedKeysCounter}</Text>;
};

render(<Counter />);
