export type Key = {
  action: Function;
  value: string;
  disabled: boolean;
  included: boolean;
  found: boolean;
};

export type Input = Omit<Key, 'action' | 'disabled'>;
