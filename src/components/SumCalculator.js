import React, { useState, useEffect } from "react";

function SumCalculator() {
  const [numbers, setNumbers] = useState([]);
  const [input, setInput] = useState("");
  const [sum, setSum] = useState(0);

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      const value = e.target.value.trim();   // read directly from input
      if (value === "") return;

      const num = parseInt(value, 10);
      if (!Number.isNaN(num)) {
        setNumbers((prev) => [...prev, num]);
      }
      setInput("");                          // clear box after adding
    }
  };

  useEffect(() => {
    const total = numbers.reduce((acc, curr) => acc + curr, 0);
    setSum(total);
  }, [numbers]);

  return (
    <div>
      <h2>Sum Calculator</h2>
      <input
        type="number"
        placeholder="Enter number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <h3>Total Sum: {sum}</h3>
    </div>
  );
}

export default SumCalculator;
