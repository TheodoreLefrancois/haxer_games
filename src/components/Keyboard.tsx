import type { Key as KeyProps } from 'Types/index';

import Key from './Key';

interface Iprops {
  keys: KeyProps[];
}
function Keyboard({ keys }: Iprops) {
  return (
    <section className="flex items-center justify-center space-x-2">
      <div className="keyboard gap-2 w-full">
        {keys.slice(0, 26).map((key) => (
          <Key key={key.value} {...key} />
        ))}
      </div>
      <div className="flex flex-col justify-center space-y-2">
        {keys.slice(26).map((key) => (
          <Key key={key.value} {...key} />
        ))}
      </div>
    </section>
  );
}
export default Keyboard;
