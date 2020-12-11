import slice from './slice';
import actionCreators from './actions';

const { actions, reducer } = slice;

export const authActions = { ...actions, ...actionCreators };

export { actionsTypes as authActionsTypes } from './actions';
export { initialState as authInitialState } from './slice';

export default reducer;
