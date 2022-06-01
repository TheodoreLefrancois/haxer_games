import React from 'react';
import { getDevice } from 'Utils/getDevice';

interface Iprops {
  roundNumber: number;
  setRoundNumber: React.Dispatch<React.SetStateAction<number>>;
  setIsGameStarted: React.Dispatch<React.SetStateAction<boolean>>;
}
function FirstVue({ roundNumber, setRoundNumber, setIsGameStarted }: Iprops) {
  const minMax = [1, 101];
  const [error, setError] = React.useState(false);
  const isDesktop = getDevice() === 'desktop';
  return (
    <form
      className="flex flex-col items-center space-y-4"
      onSubmit={(e) => {
        e.preventDefault();

        roundNumber % 2 !== 0 ? setIsGameStarted(true) : setError(true);
      }}>
      <label className={error ? 'text-red-500' : 'text-cyan-500'} htmlFor="gameNumber">
        Number of round must be odd
      </label>

      <input
        type="number"
        name="gameNumber"
        onChange={(e) =>
          (e.target.value.length === 0 ||
            (e.target.valueAsNumber >= minMax[0] &&
              e.target.valueAsNumber < minMax[1])) &&
          setRoundNumber(e.target.valueAsNumber)
        }
        step={roundNumber % 2 === 0 ? 1 : 2}
        value={roundNumber}
        className={`rounded-full bg-slate-600 focus:outline-none h-24 w-24 text-3xl text-center ${
          isDesktop && 'pl-3'
        }`}
      />
      <button
        type="submit"
        className="tracking-wider font-extralight rounded-full border-cyan-500 border-2 p-2 w-32">
        BEGIN
      </button>
    </form>
  );
}

export default FirstVue;
