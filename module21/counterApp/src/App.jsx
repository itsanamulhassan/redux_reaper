import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/counter/counterSlice";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  return (
    <div>
      <h1>Counter with Redux</h1>

      <ul className="buttons">
        <li>
          <button
            onClick={() => {
              dispatch(increment(5));
            }}
          >
            Increment by 5
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              dispatch(increment(1));
            }}
          >
            Increment
          </button>
        </li>
        <li>
          <h2>{state.counter.count}</h2>
        </li>
        <li>
          <button
            onClick={() => {
              dispatch(decrement(1));
            }}
          >
            Decrement
          </button>
        </li>
      </ul>
    </div>
  );
}

export default App;
