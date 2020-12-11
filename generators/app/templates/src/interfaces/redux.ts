import store from 'redux/store';
import { ThunkAction, Action, AsyncThunk } from '@reduxjs/toolkit';

export type ActionTypes = Record<string, string>;

export type GenericFetchInitialState<T = Record<string, any>> = T & {
  error: any;
  loading: boolean;
};

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;

export type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
export type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;
export type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
