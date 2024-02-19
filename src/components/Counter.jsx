import { useSelector, useDispatch } from "react-redux";

import {
  decrement,
  increment,
  incrementByValue,
} from "../redux/features/counter/counterSlice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter</h2>

      <div>
              <button onClick={() => dispatch(increment())}>Increment</button>
              <button onClick={() => dispatch(incrementByValue(5))}>Increment By 5</button>
              
        <h2>{count}</h2>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
