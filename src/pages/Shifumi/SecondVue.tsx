import { ReactComponent as NullSVG } from 'public/assets/null.svg';
import { ReactComponent as PaperSVG } from 'public/assets/paper.svg';
import { ReactComponent as RockSVG } from 'public/assets/rock.svg';
import { ReactComponent as ScissorsSVG } from 'public/assets/scissors.svg';
import React from 'react';
import { CHOICES, GAME_STATUS } from 'Types/index';
import { getWinner } from 'Utils/getWinner';

interface Iprops {
  roundNumber: number;
  setIsGameStarted: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Scores {
  player: number;
  bot: number;
  null: number;
}

const ShifumiSVGS = (isSelected: boolean) => {
  const className = `${
    isSelected ? 'text-yellow-500' : 'text-cyan-500'
  } fill-current h-32 w-32`;
  return {
    [CHOICES.PAPER]: <PaperSVG className={className} />,
    [CHOICES.ROCK]: <RockSVG className={className} />,
    [CHOICES.SCISSORS]: <ScissorsSVG className={className} />,
    [CHOICES.NULL]: <NullSVG className={className} />,
  };
};

function renderSVG(key: CHOICES, isSelected: boolean) {
  return ShifumiSVGS(isSelected)[key];
}

function getFinalMessage(scores: Parameters<typeof FinalResult>[0]['scores']) {
  if (scores.bot > scores.player) {
    return { message: 'Too bad ! You loose', color: 'text-red-500' };
  } else if (scores.player > scores.bot) {
    return { message: 'Congratulations ! You win', color: 'text-yellow-500' };
  } else {
    return { message: 'You tied ...', color: 'text-cyan-500' };
  }
}
function Player({
  playerChoice,
  setPlayerChoice,
  setBotChoice,
}: {
  playerChoice: CHOICES;
  setPlayerChoice: React.Dispatch<React.SetStateAction<CHOICES>>;
  setBotChoice: React.Dispatch<React.SetStateAction<CHOICES>>;
}) {
  const shifumi = [CHOICES.PAPER, CHOICES.ROCK, CHOICES.SCISSORS];

  React.useEffect(() => {
    function generateRandomNumber() {
      return shifumi[Math.round(Math.random() * 2)];
    }
    setBotChoice(generateRandomNumber());
  }, []);

  return (
    <div className="flex flex-col items-center space-y-4">
      <section className="flex flex-row flex-wrap justify-center space-x-4 space-y-2">
        {shifumi.map((choice) => {
          return (
            <button
              className={`${
                playerChoice === choice
                  ? 'text-yellow-500 border-yellow-500'
                  : 'text-cyan-500 border-cyan-500'
              } rounded-2xl`}
              key={choice}
              onClick={() =>
                playerChoice === choice
                  ? setPlayerChoice(CHOICES.NULL)
                  : setPlayerChoice(choice)
              }
              type="button">
              {renderSVG(choice, choice === playerChoice)}
            </button>
          );
        })}
      </section>
      <div className="w-96 h-2 rounded-full bg-slate-500">
        <div className="animate-progress bg-cyan-500 w-full h-full rounded-full"></div>
      </div>
    </div>
  );
}

function Start({ countdown }: { countdown: number }) {
  return (
    <p className="font-bold text-cyan-500 text-4xl">{countdown >= 0 && countdown}</p>
  );
}

function Score({
  botChoice,
  playerChoice,
  roundWinner,
}: {
  botChoice: CHOICES;
  playerChoice: CHOICES;
  roundWinner: keyof Scores;
}) {
  return (
    <section className="flex flex-col items-center space-y-4">
      <div className="flex items-center justify-center space-x-3">
        {renderSVG(playerChoice, roundWinner === 'player')}

        <p>VS</p>
        {renderSVG(botChoice, roundWinner === 'bot')}
      </div>
      <p
        className={`${
          roundWinner === 'player'
            ? 'text-yellow-500'
            : roundWinner === 'bot'
            ? 'text-red-500'
            : 'text-cyan-500'
        } w-32 text-center font-semibold text-xl`}>
        {roundWinner === 'null'
          ? 'DRAW !'
          : roundWinner === 'player'
          ? 'YOU WIN !'
          : 'YOU LOOSE !'}
      </p>
    </section>
  );
}
const FinalResult = ({
  scores,
  setIsGameStarted,
}: {
  scores: { player: number; bot: number };
  setIsGameStarted: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const finalMessage = getFinalMessage(scores);
  return (
    <section className="flex flex-col items-center space-y-5">
      <p className={`${finalMessage.color} text-3xl font-semibold animate-appear`}>
        {finalMessage.message}
      </p>
      <button
        type="button"
        onClick={() => {
          setIsGameStarted(false);
        }}
        className="bg-slate-600 border-2 border-cyan-500 text-center rounded-lg h-16 w-44 text-cyan-500 font-semibold">
        PLAY AGAIN
      </button>
    </section>
  );
};

function SecondVue({ roundNumber, setIsGameStarted }: Iprops) {
  const [currentRound, setCurrentRound] = React.useState(1);
  const [scores, setScores] = React.useState({ player: 0, bot: 0, null: 0 });
  const [currentCountdown, setCurrentCountdown] = React.useState(3);
  const [roundWinner, setRoundWinner] = React.useState<keyof Scores>('null');
  const [playerChoice, setPlayerChoice] = React.useState(CHOICES.NULL);
  const [botChoice, setBotChoice] = React.useState(CHOICES.NULL);
  const [gameStatus, setGameStatus] = React.useState(GAME_STATUS.START);

  const TempComponents = {
    [GAME_STATUS.START]: <Start countdown={currentCountdown} />,
    [GAME_STATUS.PLAYER]: (
      <Player
        playerChoice={playerChoice}
        setPlayerChoice={setPlayerChoice}
        setBotChoice={setBotChoice}
      />
    ),
    [GAME_STATUS.SCORE]: (
      <Score
        botChoice={botChoice}
        playerChoice={playerChoice}
        roundWinner={roundWinner}
      />
    ),
    [GAME_STATUS.FINAL_RESULT]: (
      <FinalResult scores={scores} setIsGameStarted={setIsGameStarted} />
    ),
  };

  const MountedComponent = (currentStatus: GAME_STATUS) => {
    return TempComponents[currentStatus];
  };

  React.useEffect(() => {
    const countdown = setInterval(() => {
      if (currentCountdown > 0) {
        setCurrentCountdown(currentCountdown - 1);
      } else {
        switch (gameStatus) {
          case GAME_STATUS.START:
            setGameStatus(GAME_STATUS.PLAYER);
            setCurrentCountdown(5);
            break;
          case GAME_STATUS.PLAYER:
            setRoundWinner(getWinner(playerChoice, botChoice));
            setScores({
              ...scores,
              [getWinner(playerChoice, botChoice)]:
                scores[getWinner(playerChoice, botChoice)] + 1,
            });
            setGameStatus(GAME_STATUS.SCORE);
            setCurrentCountdown(4);
            break;
          case GAME_STATUS.SCORE:
            if (currentRound === roundNumber) {
              setGameStatus(GAME_STATUS.FINAL_RESULT);
            } else {
              setBotChoice(CHOICES.NULL);
              setPlayerChoice(CHOICES.NULL);
              setRoundWinner('null');
              setGameStatus(GAME_STATUS.START);
              setCurrentRound(currentRound + 1);
              setCurrentCountdown(3);
            }
            break;
          case GAME_STATUS.FINAL_RESULT:
            break;
          default:
            break;
        }
      }
    }, 1000);
    return () => {
      clearInterval(countdown);
    };
  }, [currentCountdown, scores]);

  return (
    <div className="flex flex-col items-center space-y-5">
      <p className="text-xl font-bold text-cyan-500">
        ROUND <span className="text-">{`${currentRound}/${roundNumber}`}</span>
      </p>
      <section className="flex justify-center items-center border-2 border-cyan-500 rounded-md h-20">
        <div className="flex flex-col items-start w-20 text-center">
          <p className="text-center w-full">YOU</p>
          <span className="text-center w-full text-cyan-500 font-semibold text-2xl">
            {scores.player}
          </span>
        </div>
        <p>-</p>
        <div className="flex flex-col items-end w-20 text-center">
          <p className="text-center w-full">IA</p>
          <span className="text-center w-full text-cyan-500 font-semibold text-2xl">
            {scores.bot}
          </span>
        </div>
      </section>
      {MountedComponent(gameStatus)}
    </div>
  );
}
export default SecondVue;
