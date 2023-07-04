import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AnyAction, CombinedState, Reducer} from '@reduxjs/toolkit';

export default (reducers: Reducer<CombinedState<any>, AnyAction>) => {
  const persistedReducer = persistReducer(
    {
      key: 'renewablee',
      storage: AsyncStorage,
      whitelist: ['global'],
    },
    reducers,
  );

  return persistedReducer;
};
