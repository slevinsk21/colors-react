import { colorsTypes } from '../action-types';

import { getAll } from '../services';

export const getAllColors = (q = null) => async dispatch => {
  dispatch({ type: colorsTypes.GETALL_LOADING });
  try {
    // eslint-disable-next-line camelcase
    const { data, page, total_pages } = await getAll('colors', q);
    dispatch({
      type: colorsTypes.GETALL_SUCCESS,
      payload: {
        list: data,
        page,
        totalPages: total_pages
      }
    });
  } catch (e) {
    dispatch({ type: colorsTypes.GETALL_ERROR });
  } finally {
    dispatch({ type: colorsTypes.GETALL_LOADING });
  }
};
