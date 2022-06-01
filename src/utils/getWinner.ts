import { CHOICES } from 'Types/index';

export function getWinner(playerChoice: CHOICES, botChoice: CHOICES) {
  switch (playerChoice) {
    case CHOICES.NULL:
      return 'bot';

    case CHOICES.PAPER:
      if (botChoice === CHOICES.PAPER) {
        return 'null';
      } else if (botChoice === CHOICES.ROCK) {
        return 'player';
      } else {
        return 'bot';
      }

    case CHOICES.ROCK:
      if (botChoice === CHOICES.PAPER) {
        return 'bot';
      } else if (botChoice === CHOICES.ROCK) {
        return 'null';
      } else {
        return 'player';
      }

    case CHOICES.SCISSORS:
      if (botChoice === CHOICES.PAPER) {
        return 'player';
      } else if (botChoice === CHOICES.ROCK) {
        return 'bot';
      } else {
        return 'null';
      }

    default:
      return 'null';
  }
}
