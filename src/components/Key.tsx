import type { Key as KeyType } from 'Types/index';
import { alphabet } from 'Utils/keys';

type Iprops = KeyType;

function Key({ action, value, disabled, found, included }: Iprops) {
  const isCharacter = alphabet.includes(value);
  return (
    <button
      className={`uppercase border-2 disabled:border-gray-500 disabled:text-gray-500 rounded-xl ${value} ${
        found
          ? 'bg-red-500 border-red-500'
          : included
          ? 'bg-yellow-400 border-yellow-400'
          : 'border-cyan-500'
      } ${isCharacter ? 'w-12' : 'w-24'}`}
      disabled={disabled}
      onClick={() => action(value)}>
      {value}
    </button>
  );
}

export default Key;
