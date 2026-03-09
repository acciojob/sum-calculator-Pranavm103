import React, { useState, useEffect } from "react";

const SumCalculator = () => {
  const [numbers, setNumbers] = useState([]);       
  const [input, setInput] = useState("");          
  const [sum, setSum] = useState(0);               

 
  useEffect(() => {
    const id = setTimeout(() => {
      const total = numbers.reduce((acc, n) => acc + n, 0);
      setSum(total);
    }, 0); 

    return () => clearTimeout(id);
  }, [numbers]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = () => {
    if (input.trim() === "") return;

    const value = parseInt(input, 10);  
    if (Number.isNaN(value)) return;

    setNumbers((prev) => [...prev, value]);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div>
      <h1>Sum Calculator</h1>
      <input
        type="number"
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter a number"
      />
      <button onClick={handleAdd}>Add</button>
      <p>Total sum: {sum}</p>
    </div>
  );
};

export default SumCalculator;
