import { useState, useEffect } from "react";
import { render, Text, Box } from "ink";

const DemoLayout = () => {
  const [temperatures, setTemperatures] = useState<number[]>([19.3]);
  const averageTemperature =
    temperatures.reduce((sum, value) => sum + value, 0) / temperatures.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setTemperatures((oldTemperatures) => [
        ...oldTemperatures,
        10 + Math.random() * 20,
      ]);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box flexDirection="column">
      <Box flexDirection="column" height={10}>
        {temperatures.slice(-10).map((temperature, index) => (
          <Box key={index}>
            <Text>{temperature.toFixed(1)}</Text>
          </Box>
        ))}
      </Box>
      <Box>
        <Text>Average temperature: {averageTemperature.toFixed(1)} C</Text>
      </Box>
    </Box>
  );
};

const { clear } = render(<DemoLayout />);
clear();
