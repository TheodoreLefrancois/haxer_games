import React from 'react';

interface Iprops {
  searchedWord: string;
  setSearchedWord: React.Dispatch<React.SetStateAction<string>>;
  setIsSelectedWord: React.Dispatch<React.SetStateAction<boolean>>;
}

function FirstVue({ searchedWord, setSearchedWord, setIsSelectedWord }: Iprops) {
  return (
    <form
      className="flex flex-col items-center justify-center tracking-widest mt-5"
      onSubmit={(e) => {
        e.preventDefault();
        setIsSelectedWord(true);
      }}>
      <label htmlFor="word" className="uppercase">
        Give a word
      </label>
      <input
        className="bg-slate-600 focus:outline-none rounded-lg px-4 h-10 w-100 tracking-widest font-medium my-4 text-lg text-center"
        name="word"
        value={searchedWord}
        onChange={(e) => setSearchedWord(e.target.value.toUpperCase())}></input>
      <button
        type="submit"
        className="tracking-wider font-extralight rounded-full border-cyan-500 border-2 p-2 w-20">
        OK
      </button>
    </form>
  );
}

export default FirstVue;
