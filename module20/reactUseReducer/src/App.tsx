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
          [action.payload.field]: action.payload.value,
        };
      case "RESET":
        return initialState;
      case "FIELD_CLEAR":
        return {
          ...state,
          [action.payload.field]: "",
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
        field: event.target.name,
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
              <input
                value={user.name}
                onChange={handlerOnChange}
                type="text"
                name="name"
                id=""
              />
              <button
                onClick={() =>
                  dispatch({
                    type: "FIELD_CLEAR",
                    payload: {
                      field: "name",
                    },
                  })
                }
              >
                clear
              </button>
            </li>
            <li>
              <label htmlFor="email">Email</label>
              <input
                value={user.email}
                onChange={handlerOnChange}
                type="email"
                name="email"
                id=""
              />
              <button
                onClick={() =>
                  dispatch({
                    type: "FIELD_CLEAR",
                    payload: {
                      field: "email",
                    },
                  })
                }
              >
                clear
              </button>
            </li>
            <li>
              <label htmlFor="phone">Phone</label>
              <input
                value={user.phone}
                onChange={handlerOnChange}
                type="tel"
                name="phone"
                id=""
              />
              <button
                onClick={() =>
                  dispatch({
                    type: "FIELD_CLEAR",
                    payload: {
                      field: "phone",
                    },
                  })
                }
              >
                clear
              </button>
            </li>
          </ul>
          <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}

export default App;
