interface Iprops {
  title: string;
}
function GameTitle({ title }: Iprops) {
  return (
    <h2 className="text-red-500 text-3xl font-bold tracking-wider border-b-2 border-red px-6 pb-2 mb-6">
      {title}
    </h2>
  );
}

export default GameTitle;
