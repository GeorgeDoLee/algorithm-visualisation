import React, { useEffect, useState } from "react";

const SieveOfEratosthenes = () => {
  const [array, setArray] = useState(
    Array.from({ length: 100 }, (_, index) => ({
      number: index + 1,
      value: false
    }))
  );
  const [currentNumber, setCurrentNumber] = useState(null);
  const [speed, setSpeed] = useState(1);

  const [delay, setDelay] = useState(100);

  useEffect(() => {
    setDelay(100 / speed);
  }, [speed]);

  const sieveOfEratosthenes = async () => {
    let newArray = [...array];

    for (let i = 2; i * i <= newArray.length; i++) {
        if (newArray[i - 1].value === true) {
            continue;
        } 
        setCurrentNumber(i - 1);
        for (let j = i * i; j <= newArray.length; j += i) {
            newArray = [...array];
            newArray[j - 1].value = true;
            setArray(newArray);
            await new Promise((resolve) => setTimeout(resolve, delay));
        }
    }
  }

  const changeSpeed = () => {
    if(speed + 0.5 <= 2.5){
        setSpeed((prev) => prev + 0.5);
    } else {
        setSpeed(1);
    }
  }

  const reset = () => {
    const newArray = Array.from({ length: 100 }, (_, index) => ({
        number: index + 1,
        value: false
    }))

    setArray(newArray);
    setCurrentNumber(null);
  }


  return (
    <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex self-end gap-2">
            <label className="text-zinc-300">Speed</label>
            <button className="w-[50px] text-center duration-300 rounded-md shadow-lg bg-zinc-300 text-zinc-800 hover:bg-zinc-700 hover:text-zinc-300 active:scale-95" onClick={() => changeSpeed()}>{speed}x</button>
            </div>
        
        <table className="shadow-lg">
            <tbody className="bg-zinc-800">
            {array.reduce((rows, item, index) => {
                if (index % 10 === 0) rows.push([]);
                rows[rows.length - 1].push(item);
                return rows;
            }, []).map((row, rowIndex) => (
                <tr key={rowIndex}>
                {row.map((item, col) => (
                    <td 
                        key={col}
                        className={`p-3 text-center border-2 border-zinc-300 ${
                            item.number - 1 === currentNumber
                                ? 'bg-green-800 text-zinc-300' 
                                : item.value === false 
                                    ? 'text-zinc-300' 
                                    : 'text-red-800' 
                          }`}
                    >{item.number}</td>
                ))}
                </tr>
            ))}
            </tbody>
        </table>
        <button 
            className="self-stretch py-2 font-bold text-center duration-300 rounded-md shadow-lg bg-zinc-300 text-zinc-800 hover:bg-zinc-700 hover:text-zinc-300 active:scale-95"
            onClick={() => sieveOfEratosthenes()}
        >START</button>
        <button 
            className="self-stretch py-2 font-bold text-center duration-300 rounded-md shadow-lg bg-zinc-300 text-zinc-800 hover:bg-zinc-700 hover:text-zinc-300 active:scale-95"
            onClick={() => reset()}
        >RESET</button>

    </div>
  );
};

export default SieveOfEratosthenes;
