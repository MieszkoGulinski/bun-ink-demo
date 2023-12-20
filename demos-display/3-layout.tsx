import { useState, useEffect } from "react";
import { render, Text, Box } from "ink";

const DemoLayout = () => {
  const [temperature, setTemperature] = useState(15);
  const [humidity, setHumidity] = useState(60);
  const [pressure, setPressure] = useState(1000);

  useEffect(() => {
    const timer = setInterval(() => {
      setTemperature(15 + Math.random() * 2);
      setHumidity(50 + Math.random() * 30);
      setPressure(990 + Math.random() * 20);
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box flexDirection="column">
      <Box justifyContent="space-between">
        <Text color="green">Temperature</Text>
        <Box>
          <Text color="yellow">{temperature.toFixed(1)}</Text>
          <Text color="white"> C</Text>
        </Box>
      </Box>
      <Box justifyContent="space-between">
        <Text color="red">Humidity</Text>
        <Box>
          <Text color="orange">{Math.round(humidity)}</Text>
          <Text color="white">%</Text>
        </Box>
      </Box>
      <Box justifyContent="space-between">
        <Text color="red">Pressure</Text>
        <Box>
          <Text color="blue">{Math.round(pressure)}</Text>
          <Text color="white"> hPa</Text>
        </Box>
      </Box>
    </Box>
  );
};

render(<DemoLayout />);
