import React, { useState, useEffect } from "react";

function SumCalculator() {

  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  const handleChange = (e) => {

    const value = parseInt(e.target.value);

    if (!isNaN(value)) {
      setNumbers((prev) => [...prev, value]);
    }

    e.target.value = "";
  };

  useEffect(() => {

    setTimeout(() => {

      let total = 0;

      for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
      }

      setSum(total);

    }, 0);

  }, [numbers]);

  return (
    <div>

      <h2>Sum Calculator</h2>

      <input
        type="number"
        placeholder="Enter number"
        onChange={handleChange}
      />

      <h3>Sum: {sum}</h3>

    </div>
  );
}

export default SumCalculator;