import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/actions/counterActions";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementClick = () => dispatch(increment());
  const decrementClick = () => dispatch(decrement());
  const incrementDouble = () => dispatch(increment(2));

  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <button onClick={incrementClick}>Increment</button>
      <button onClick={decrementClick}>Decrement</button>
      <br />
      <button onClick={incrementDouble}>Increment Double</button>
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   counter: state.counter,
// });

// const mapDispatchToProps = (dispatch) => ({
//   increment: () =>
//     dispatch({
//       type: "INCREMENT",
//     }),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
