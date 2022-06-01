import type { Key as KeyType } from 'Types/index';
import { alphabet } from 'Utils/keys';

type Iprops = KeyType;

function Key({ action, value, disabled, found, included }: Iprops) {
  const isCharacter = alphabet.includes(value);
  return (
    <button
      className={`uppercase border-2 disabled:border-gray-500 disabled:text-gray-500 rounded-lg ${value} ${
        found
          ? 'bg-red-500 border-red-500'
          : included
          ? 'bg-yellow-400 border-yellow-400'
          : 'border-cyan-500'
      } ${isCharacter ? 'w-8 md:w-12' : 'w-24'}`}
      disabled={disabled}
      type="button"
      onClick={() => action(value)}>
      {value === 'Enter' ? 'VAL' : value === 'Backspace' ? 'DEL' : value}
    </button>
  );
}

export default Key;
