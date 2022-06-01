import React from 'react';

import GameTitle from './GameTitle';
interface Iprops {
  children: React.ReactNode;
  gameTitle: string;
}
const GameContainer = ({ children, gameTitle }: Iprops) => (
  <div className="w-full flex justify-center flex-col items-center">
    <GameTitle title={gameTitle} />
    {children}
  </div>
);

export default GameContainer;
