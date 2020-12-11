import {
  ActionReducerMapBuilder,
  createSlice,
  SliceCaseReducers,
  ValidateSliceCaseReducers
} from '@reduxjs/toolkit';
import {
  ActionTypes,
  FulfilledAction,
  GenericFetchInitialState,
  PendingAction,
  RejectedAction
} from 'interfaces/redux';

export const createActionTypes = (
  actions: Array<string>,
  namespace: string
): ActionTypes =>
  actions.reduce(
    (actionTypes: ActionTypes, action: string) => ({
      ...actionTypes,
      ...{ [action]: `${namespace}/${action}` }
    }),
    { namespace }
  );

// TODO: Improve this fetch slice saving the data as well and adding a state status machine on the loading value
export const createFetchSlice = <
  T,
  Reducers extends SliceCaseReducers<GenericFetchInitialState<T>>
>({
  name = '',
  initialState,
  reducers,
  extraReducers
}: {
  name: string;
  initialState: GenericFetchInitialState<T>;
  reducers: ValidateSliceCaseReducers<GenericFetchInitialState<T>, Reducers>;
  extraReducers: (
    builder: ActionReducerMapBuilder<GenericFetchInitialState<T>>
  ) => void;
}) => {
  return createSlice({
    name,
    initialState,
    reducers,
    extraReducers: builder => {
      extraReducers(builder);
      builder
        .addMatcher<PendingAction>(
          action => action.type.endsWith('/pending'),
          state => {
            state.loading = true;
          }
        )
        .addMatcher<RejectedAction>(
          action => action.type.endsWith('/rejected'),
          (state, action) => {
            state.loading = false;
            state.error = action.error;
          }
        )
        .addMatcher<FulfilledAction>(
          action => action.type.endsWith('/fulfilled'),
          state => {
            state.loading = false;
            state.error = null;
          }
        );
    }
  });
};
