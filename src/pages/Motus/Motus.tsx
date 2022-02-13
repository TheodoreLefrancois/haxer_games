import { GameTitle } from 'Components/index';
import React from 'react';

import FirstVue from './FirstVue';
import SecondVue from './SecondVue';

function Motus() {
  const [searchedWord, setSearchedWord] = React.useState('');
  const [isSelectedWord, setIsSelectedWord] = React.useState(false);

  return (
    <div className="w-full flex justify-center flex-col items-center">
      <GameTitle title="MOTUS" />

      {isSelectedWord ? (
        <SecondVue searchedWord={searchedWord.toUpperCase()} />
      ) : (
        <FirstVue {...{ searchedWord, setSearchedWord, setIsSelectedWord }} />
      )}
    </div>
  );
}

export default Motus;
