export interface IHydraGet<T> {
  length: never;
  map(arg0: (member: never) => JSX.Element): never;
  'hydra:member': (T & TMember)[];
  'hydra:totalItems'?: number;
  'hydra:view'?: THydraView;
}

export type THydraView = {
  '@id': string;
  'hydra:first': string;
  'hydra:last': string;
  'hydra:next'?: string;
  'hydra:previous'?: string;
}

type TEnabledTransitions = {
  name: string;
}

export type TMember = {
  id: string;
  '@type': string;
  enabledTransitions?: TEnabledTransitions[];
}
