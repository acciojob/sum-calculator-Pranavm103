import React, { useEffect } from 'react'

const SumCalculator = () => {

    const [currentInput, setCurrentInput] = React.useState('');
    const [numbers, setNumbers] = React.useState([]);
    const [sum, setSum] = React.useState(0);

    useEffect(()=>{
        let isCancelled = false;

        const id = setTimeout(()=>{
            if(isCancelled) return;
            const total = numbers.reduce((acc, num) => acc + num, 0);
            setSum(total);
        },0);
        return () => {
            isCancelled = true;
            clearTimeout(id);
        };
    },[numbers]);

    const handleChange=(e)=>{
        setCurrentInput(e.target.value);
    };
    const handleAddNumber=()=>{
        if(currentInput.trim() === '') return;
        const value = Numbers(currentInput);
        if(isNaN(value)) return;
        setNumbers(prev => [...prev, value]);
        setCurrentInput('');
    }
    const handleKeyDown=(e)=>{
        if(e.key === 'Enter'){
            handleAddNumber();
        }
    };
  return (
    <div>
        <h2>Sum Calculator</h2>
        <input type="number" value={currentInput} onChange={handleChange} onKeyDown={handleKeyDown} placeholder='Enter a number'/>
        <button onClick={handleAddNumber}>Add</button>
        <p>Numbers: {numbers.join(', ') || 'None yet'}</p>
        <p>Total sum: {sum}</p>
    </div>
  )
}

export default SumCalculator;