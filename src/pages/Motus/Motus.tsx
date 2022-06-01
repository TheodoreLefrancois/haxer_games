import { GameContainer } from 'Components/index';
import React from 'react';

import FirstVue from './FirstVue';
import SecondVue from './SecondVue';

function Motus() {
  const [searchedWord, setSearchedWord] = React.useState('');
  const [isSelectedWord, setIsSelectedWord] = React.useState(false);

  return (
    <GameContainer gameTitle="MOTUS">
      {isSelectedWord ? (
        <SecondVue searchedWord={searchedWord.toUpperCase()} />
      ) : (
        <FirstVue {...{ searchedWord, setSearchedWord, setIsSelectedWord }} />
      )}
    </GameContainer>
  );
}

export default Motus;
