import { GameContainer } from 'Components/index';
import React from 'react';

import FirstVue from './FirstVue';
import SecondVue from './SecondVue';

function Shifumi() {
  const [roundNumber, setRoundNumber] = React.useState(5);
  const [isGameStarted, setIsGameStarted] = React.useState(false);
  return (
    <GameContainer gameTitle="SHIFUMI">
      {isGameStarted ? (
        <SecondVue roundNumber={roundNumber} setIsGameStarted={setIsGameStarted} />
      ) : (
        <FirstVue
          roundNumber={roundNumber}
          setIsGameStarted={setIsGameStarted}
          setRoundNumber={setRoundNumber}
        />
      )}
    </GameContainer>
  );
}

export default Shifumi;
