import { useState, useEffect } from "react";
import { render, Text, Box } from "ink";

const useTerminalHeight = () => {
  const [height, setHeight] = useState(process.stdout.rows);

  useEffect(() => {
    process.stdout.on("resize", () => {
      setHeight(process.stdout.rows);
    });
  }, []);

  return height;
};

const DemoFullscreen = () => {
  const height = useTerminalHeight();

  // counter just to keep the application from auto-closing
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((previousCounter) => previousCounter + 1);
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box flexDirection="column" justifyContent="space-between" height={height}>
      <Box justifyContent="space-between">
        <Text>top left</Text>
        <Text>top right</Text>
      </Box>
      <Box justifyContent="space-between">
        <Text>bottom left</Text>
        <Text>bottom right</Text>
      </Box>
    </Box>
  );
};

const { clear } = render(<DemoFullscreen />);
clear();
