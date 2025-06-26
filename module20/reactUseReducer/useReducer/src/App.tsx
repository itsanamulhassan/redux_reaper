import { useReducer, type ChangeEvent } from "react";

function App() {
  const initialState = {
    name: "",
    email: "",
    phone: "",
  };

  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "FIELD_UPDATE":
        return {
          ...state,
          [action.payload.filed]: action.payload.value,
        };
      default:
        state;
    }
  };
  const [user, dispatch] = useReducer(reducer, initialState);

  const handlerOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "FIELD_UPDATE",
      payload: {
        filed: event.target.name,
        value: event.target.value,
      },
    });
  };
  const handlerSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  console.log(user);
  return (
    <>
      <div>
        <form action="" onSubmit={handlerSubmit}>
          <ul>
            <li>
              <label htmlFor="name">Name</label>
              <input onChange={handlerOnChange} type="text" name="name" id="" />
            </li>
            <li>
              <label htmlFor="email">Email</label>
              <input
                onChange={handlerOnChange}
                type="email"
                name="email"
                id=""
              />
            </li>
            <li>
              <label htmlFor="phone">Phone</label>
              <input onChange={handlerOnChange} type="tel" name="phone" id="" />
            </li>
          </ul>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}

export default App;
