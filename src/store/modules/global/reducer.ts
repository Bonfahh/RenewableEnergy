import {produce} from 'immer';
import {IAccount} from 'src/@types/store';

export type StateType = {
  accounts: IAccount[] | [];
  signed: boolean;
};

const INITIAL_STATE: StateType = {
  accounts: [],
  signed: false,
};

export default function global(
  state = INITIAL_STATE,
  action: {type: string; payload: IAccount},
) {
  return produce(state, draft => {
    switch (action.type) {
      case '@global/SIGN_UP': {
        const accounts = state?.accounts || [];
        draft.accounts = [action.payload, ...accounts];
        break;
      }
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
