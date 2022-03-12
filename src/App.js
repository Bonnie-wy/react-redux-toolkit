// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/counter";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch(); //to dispatch actions from state

  return (
    <div className="App">
      <h1>The count is: {count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(33))}>
        increment by 33
      </button>
    </div>
  );
}

export default App;
