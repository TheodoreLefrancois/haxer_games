import type { Input } from 'Types/index';

import Case from './Case';

interface Iprops {
  data: Input[][];
}
function Board({ data }: Iprops) {
  return (
    <div className="flex flex-col items-center justify-center mb-8 bg-transparent">
      {data.map((raw, index) => (
        <div key={index.toString()} className="flex justify-center">
          {raw.map((input, i) => (
            <div
              key={index.toString() + i.toString()}
              className="border-2 border-cyan-500 h-16 w-16 relative">
              <Case {...input} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
export default Board;
