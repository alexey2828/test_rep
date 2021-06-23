import { TStateMachineObj } from '../../../infrastructure/change-state';

enum ETransitions {
  NEW = 'TRANSITION_NEW',
  ADD_COMPONENT = 'TRANSITION_ADD_COMPONENT',
  PUT_INTO_MIXER = 'TRANSITION_MIXER_START',
  APPROVE_FOR_USE = 'TRANSITION_APPROVE_FOR_USE',
  SEND_TO_LABORATORY = 'TRANSITION_SEND_TO_LABORATORY',
  REJECT_FOR_USE = 'TRANSITION_REJECT_FOR_USE',
  SUBMIT_ANALYSIS_INPUTS = 'TRANSITION_SUBMIT_ANALYSIS_INPUTS',
  END = 'TRANSITION_END',
  ADD_MIXER_TIME = 'TRANSITION_ADD_MIXER_TIME',
  MIXER_PAUSE = 'TRANSITION_MIXER_PAUSE',
  MIXER_UNPAUSE = 'TRANSITION_MIXER_UNPAUSE',
}

enum ETransitionsUK {
  NEW = 'Новий',
  ADD_COMPONENT = 'Додати компонент',
  PUT_INTO_MIXER = 'Відправити у міксер',
  APPROVE_FOR_USE = 'Допустити у виробництво',
  SEND_TO_LABORATORY = 'Відправити до лабраторії',
  REJECT_FOR_USE = 'Зняти з виробництва',
  SUBMIT_ANALYSIS_INPUTS = 'SUBMIT_ANALYSIS_INPUTS',
  END = 'Завершити',
  ADD_MIXER_TIME = 'Додати час',
  MIXER_PAUSE = 'На паузу',
  MIXER_UNPAUSE = 'Відновити замішування',
}

export const transitions: TStateMachineObj = {
  [ETransitions.ADD_COMPONENT]: ETransitionsUK.ADD_COMPONENT,
  [ETransitions.PUT_INTO_MIXER]: ETransitionsUK.PUT_INTO_MIXER,
  [ETransitions.APPROVE_FOR_USE]: ETransitionsUK.APPROVE_FOR_USE,
  [ETransitions.REJECT_FOR_USE]: ETransitionsUK.REJECT_FOR_USE,
  [ETransitions.SEND_TO_LABORATORY]: ETransitionsUK.SEND_TO_LABORATORY,
  [ETransitions.END]: ETransitionsUK.END,
  [ETransitions.ADD_MIXER_TIME]: ETransitionsUK.ADD_MIXER_TIME,
  [ETransitions.MIXER_PAUSE]: ETransitionsUK.MIXER_PAUSE,
  [ETransitions.MIXER_UNPAUSE]: ETransitionsUK.MIXER_UNPAUSE,
};

enum EStateUK {
  NEW = 'Новий',
  COMPONENT_ADDED = 'Компонент додан',
  MIXER_ON = 'У міксері',
  READY_FOR_USE = 'Готовий до використання',
  REJECTED_FOR_USE = 'Знято з виробництва',
  ENDED = 'Закінчилося',
  UNKNOWN = 'Невизначено',
  MIXER_PAUSE = 'На паузі',
  SENT_TO_LABORATORY = 'Відправлено до лабораторії',
  ANALYSIS_DONE = 'Аналізи успішні',
  ANALYSIS_CREATED = 'Аналізи створені'
}

enum EState {
  NEW = 'STATE_NEW',
  COMPONENT_ADDED = 'STATE_COMPONENT_ADDED',
  ENDED = 'STATE_ENDED',
  MIXER_ON = 'STATE_MIXER_ON',
  SEND_TO_LABORATORY = 'STATE_SEND_TO_LABORATORY',
  REJECTED_FOR_USE = 'STATE_REJECTED_FOR_USE',
  READY_FOR_USE = 'STATE_READY_FOR_USE',
  MIXER_PAUSE = 'STATE_MIXER_PAUSE',
  SENT_TO_LABORATORY = 'STATE_SENT_TO_LABORATORY',
  ANALYSIS_DONE = 'STATE_ANALYSIS_DONE',
  ANALYSIS_CREATED = 'STATE_ANALYSIS_CREATED',
}

export const StateUk: TStateMachineObj = {
  [EState.NEW]: EStateUK.NEW,
  [EState.COMPONENT_ADDED]: EStateUK.COMPONENT_ADDED,
  [EState.ENDED]: EStateUK.ENDED,
  [EState.MIXER_ON]: EStateUK.MIXER_ON,
  [EState.READY_FOR_USE]: EStateUK.READY_FOR_USE,
  [EState.REJECTED_FOR_USE]: EStateUK.REJECTED_FOR_USE,
  [EState.MIXER_PAUSE]: EStateUK.MIXER_PAUSE,
  [EState.SENT_TO_LABORATORY]: EStateUK.SENT_TO_LABORATORY,
  [EState.ANALYSIS_DONE]: EStateUK.ANALYSIS_DONE,
  [EState.ANALYSIS_CREATED]: EStateUK.ANALYSIS_CREATED,
} 