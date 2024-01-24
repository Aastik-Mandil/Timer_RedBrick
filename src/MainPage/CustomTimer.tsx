import React from "react";

const startTime = Date.now();
function useGetTimer() {
  const [time, setTime] = React.useState<string>("");

  React.useEffect(() => {
    const intervalRef = window.setInterval(() => {
      const now = Date.now();

      setTime((now - startTime).toString());
    });
    return () => {
      clearInterval(intervalRef);
    };
  });

  return time;
}


function CustomTimer() {
  const time = useGetTimer();

  return (
    <div>
      The page loaded {(Number(time) / 1000).toFixed(1)}{" "}
      seconds ago
    </div>
  );
}

export default CustomTimer;
