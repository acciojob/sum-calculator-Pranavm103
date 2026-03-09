import React, { useState, useEffect } from "react";

function SumCalculator() {
  const [numbers, setNumbers] = useState([]);
  const [input, setInput] = useState("");
  const [sum, setSum] = useState(0);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const num = parseInt(input);

      if (!isNaN(num)) {
        setNumbers((prev) => [...prev, num]);
      }

      setInput("");
    }
  };

  useEffect(() => {
    const calculateSum = async () => {
      let total = 0;

      for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
      }

      setSum(total);
    };

    calculateSum();
  }, [numbers]);

  return (
    <div>
      <h2>Sum Calculator</h2>

      <input
        type="number"
        value={input}
        placeholder="Enter number"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <h3>Total Sum: {sum}</h3>
    </div>
  );
}

export default SumCalculator;