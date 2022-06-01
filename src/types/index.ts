export type Key = {
  action: Function;
  value: string;
  disabled: boolean;
  included: boolean;
  found: boolean;
};

export type Input = Omit<Key, 'action' | 'disabled'>;

export enum GAME_STATUS {
  START = 'START',
  PLAYER = 'PLAYER',
  SCORE = 'SCORE',
  FINAL_RESULT = 'FINAL_RESULT',
}

export enum CHOICES {
  ROCK = 'rock',
  PAPER = 'paper',
  SCISSORS = 'scissors',
  NULL = 'null',
}
