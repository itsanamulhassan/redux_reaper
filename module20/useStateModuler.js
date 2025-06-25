const React = (() => {
  let state = [];
  let index = 0;
  const useState = (initialState) => {
    let hookIndex = index;
    index++;
    if (state[hookIndex] === undefined) {
      state[hookIndex] = initialState;
    }

    const setter = (newState) => {
      return (state[hookIndex] = newState);
    };
    return [state[hookIndex], setter];
  };

  const resetIndex = () => {
    index = 0;
  };
  return {
    useState,
    resetIndex,
  };
})();

const { useState, resetIndex } = React;
const Component = () => {
  const [value, setValue] = useState(1);
  const [name, setName] = useState("Programming");
  console.log(value, "value 1");
  setValue(2);
  console.log(name, "name 1");
  setName("Hero");
  //   console.log(value, "value 2");
  //   setValue((value) => value + 2);
  //   console.log(value, "value 3");
};
Component();
resetIndex();
Component();
