import { SHOW_ALERT, HIDE_ALERT } from '../types';

const handlers = {
  [SHOW_ALERT]: (state, { payload }) => ({ ...payload, visible: true }),
  [HIDE_ALERT]: (state) => ({ ...state, visible: false }),
  DEFAULT: (state) => state,
};

// eslint-disable-next-line import/prefer-default-export
export const alertReducer = (state, action) => {
  const handle = handlers[action.type] ?? handlers.DEFAULT;
  return handle(state, action);
};
