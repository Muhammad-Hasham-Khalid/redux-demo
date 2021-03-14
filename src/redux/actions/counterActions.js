export const increment = (number = 1) => ({
  type: "INCREMENT",
  payload: number,
});

export const decrement = () => {
  return async function (dispatch) {
    return dispatch({
      type: "DECREMENT",
    });
  };
};
