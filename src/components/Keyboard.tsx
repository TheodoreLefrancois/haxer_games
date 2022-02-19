import type { Key as KeyProps } from 'Types/index';

import Key from './Key';

interface Iprops {
  keys: KeyProps[];
}
function Keyboard({ keys }: Iprops) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-x-2">
      <div className="keyboard gap-1 md:gap-2 w-full">
        {keys.slice(0, 26).map((key) => (
          <Key key={key.value} {...key} />
        ))}
      </div>
      <div className="flex md:flex-col justify-center space-x-2 md:space-y-2">
        {keys.slice(26).map((key) => (
          <Key key={key.value} {...key} />
        ))}
      </div>
    </section>
  );
}
export default Keyboard;
