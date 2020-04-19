import { colorsTypes } from '../action-types';

const initialState = {
  list: [],
  page: 1,
  totalPages: 1,
  loading: false,
  error: false
};

const colors = (state = initialState, action) => {
  switch (action.type) {
    case colorsTypes.GETALL_LOADING:
      const { loading } = state;
      return {
        ...state,
        loading: !loading
      };

    case colorsTypes.GETALL_SUCCESS:
      console.log({ action });
      return {
        ...state,
        ...action.payload,
        error: false
      };

    case colorsTypes.GETALL_ERROR:
      return {
        ...state,
        error: true
      };

    default:
      return state;
  }
};
export default colors;
