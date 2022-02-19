import type { Input } from 'Types/index';

type Iprops = Input;

function Case({ value, found, included }: Iprops) {
  return (
    <p
      className={`uppercase border-2 rounded-full h-full w-full text-2xl md:text-4xl align-middle font-semibold text-center p-1 md:p-2 ${
        found
          ? 'bg-red-500 border-red-500'
          : included
          ? 'bg-yellow-400 border-yellow-400'
          : 'border-none'
      }`}>
      {found && (
        <div className="bg-red-500 border-red-500 border-2 rounded-full h-10 w-10 md:h-16 md:w-16 absolute inset-0 -z-10 " />
      )}
      {value}
    </p>
  );
}

export default Case;
