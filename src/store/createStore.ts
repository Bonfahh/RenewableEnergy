import {configureStore} from '@reduxjs/toolkit';
import {AnyAction, CombinedState, Reducer} from '@reduxjs/toolkit';

export default (reducers: Reducer<CombinedState<any>, AnyAction>) => {
  const store = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({serializableCheck: false}),
  });

  return store;
};
