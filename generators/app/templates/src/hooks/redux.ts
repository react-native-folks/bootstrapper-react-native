import { RootState } from 'interfaces/redux';
import { createSelectorHook } from 'react-redux';

export const useSelector = createSelectorHook<RootState>();
