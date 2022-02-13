import { Board, Keyboard } from 'Components/index';
import React from 'react';
import { Input } from 'Types/index';
import { keys } from 'Utils/keys';

interface Iprops {
  searchedWord: string;
}
function initBoard(wordLength: number, chance: number, firstLetter: string) {
  const board = Array(chance)
    .fill(Array(wordLength).fill({}))
    .map((raw, index) =>
      raw.map((_: [], i: number) => ({
        found: false,
        included: false,
        value: index === 0 && i === 0 ? firstLetter : index === 0 ? '.' : '',
      })),
    );
  return board;
}
function generateNewRaw(value: string, rawLength: number) {
  return Array(rawLength)
    .fill({})
    .map((_, index) => ({
      value: value[index] && value[index] !== ' ' ? value[index] : '.',
      found: false,
      included: false,
    }));
}

function generateNewBoard(currentBoard: Input[][], rawIndex: number, newRaw: Input[]) {
  currentBoard.splice(rawIndex, 1, newRaw);
  return currentBoard;
}

function SecondVue({ searchedWord }: Iprops) {
  const chance = 6;

  const [currentRawIndex, setCurrentRawIndex] = React.useState(0);
  const [rawInitialValue, setRawInitialValue] = React.useState(searchedWord[0]);
  const [input, setInput] = React.useState(searchedWord[0]);
  const [boardData, setBoardData] = React.useState<Input[][]>(
    initBoard(searchedWord.length, chance, searchedWord[0]),
  );
  function handleSubmit() {
    const success = input.toUpperCase() === searchedWord;
    const fail = chance === currentRawIndex - 1 && !success;
    if (success) {
      alert('Congratulations !\n Play Again \n Please reload to play again');
    } else if (fail) {
      alert('You failed try again \n Please reload to play again');
    } else {
      const currentNewRaw = [...boardData[currentRawIndex]].map((char, index) => ({
        value: char.value,
        found: char.value === searchedWord[index],
        included: searchedWord.includes(char.value),
      }));
      const newRawInitialValue = [...currentNewRaw]
        .map((char) => (char.found ? char.value : ' '))
        .join('');
      setRawInitialValue(newRawInitialValue);
      setBoardData(
        generateNewBoard(
          generateNewBoard(boardData, currentRawIndex, currentNewRaw),
          currentRawIndex + 1,
          generateNewRaw(newRawInitialValue, searchedWord.length),
        ),
      );
      setInput(newRawInitialValue);

      setCurrentRawIndex(currentRawIndex + 1);
    }
  }
  function handleBack() {
    if (input.length === 2) {
      setInput(input.slice(0, input.length - 1));
      setBoardData(
        generateNewBoard(
          boardData,
          currentRawIndex,
          generateNewRaw(rawInitialValue, searchedWord.length),
        ),
      );
    } else if (input.length > 2) {
      setInput(input.slice(0, input.length - 1));
      setBoardData(
        generateNewBoard(
          boardData,
          currentRawIndex,
          generateNewRaw(input.slice(0, input.length - 1), searchedWord.length),
        ),
      );
    }
  }
  function handleChange(value: string) {
    if (input.includes(' ')) {
      setInput(`${searchedWord[0]}${value}`);
      setBoardData(
        generateNewBoard(
          boardData,
          currentRawIndex,
          generateNewRaw(`${searchedWord[0]}${value}`, searchedWord.length),
        ),
      );
    }
    if (input.length !== searchedWord.length) {
      setInput(`${input}${value}`);
      setBoardData(
        generateNewBoard(
          boardData,
          currentRawIndex,
          generateNewRaw(`${input}${value}`, searchedWord.length),
        ),
      );
    }
  }
  function handleClick(value: 'DEL' | 'DEL' | string) {
    switch (value) {
      case 'DEL':
        handleBack();
        break;
      case 'VAL':
        handleSubmit();
        break;
      default:
        handleChange(value);
        break;
    }
  }
  const logicalKeys = keys.map((key) => ({ ...key, action: handleClick }));

  return (
    <div>
      <Board data={boardData} />
      <Keyboard keys={logicalKeys} />
    </div>
  );
}

export default SecondVue;
