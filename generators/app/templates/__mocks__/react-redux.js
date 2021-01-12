export const useDispatch = jest.fn();
export const useSelector = jest.fn();
export const createSelectorHook = jest
  .fn()
  .mockImplementation(() => () => true);
