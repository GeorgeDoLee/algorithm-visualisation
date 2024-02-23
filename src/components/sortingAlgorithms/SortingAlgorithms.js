import { useState } from "react";
import Buttons from "./Buttons";
import Chart from "./Chart";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const SortingAlgorithms = () => {
    const [arr, setArr] = useState(() => {
    const initialArray = Array.from({ length: 91 }, (_, index) => index + 80);
    shuffleArray(initialArray);
    return initialArray;
  });
  const [current, setCurrent] = useState({ c1: -1, c2: -2 });

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <Buttons arr={arr} setArr={setArr} setCurrent={setCurrent} shuffleArray={shuffleArray} />
      <Chart arr={arr} current={current}/>
    </div>
  );
}

export default SortingAlgorithms;