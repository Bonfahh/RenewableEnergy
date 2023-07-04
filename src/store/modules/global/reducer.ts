import {produce} from 'immer';
import {Action} from 'redux';

const INITIAL_STATE = {
  signed: false,
};

export default function global(state = INITIAL_STATE, action: Action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@global/LOGIN_SUCCESS': {
        draft.signed = true;
        break;
      }
      case '@global/LOGOUT': {
        draft.signed = false;
        break;
      }
      default:
    }
  });
}
