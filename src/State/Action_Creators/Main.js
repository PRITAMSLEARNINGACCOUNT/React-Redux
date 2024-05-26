function Increase(Value=0) {
  return (dispatch) => {
    dispatch({
      type: "Increase",
      payload: Value,
    });
  };
}
function Decrease(Value=0) {
  return (dispatch) => {
    dispatch({
      type: "Decrease",
      payload: Value,
    });
  };
}
export { Increase, Decrease };
