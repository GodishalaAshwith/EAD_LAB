import React from "react";
const myData = {
  name: "Ash",
  age: 20,
};

const FirstComp = (props) => {
  return (
    <>
      <h1>This is the first component</h1>
      <h2>Hi I am {myData.name}</h2>
      <h2>I am {props.age}  years old</h2>
    </>
  );
};

export default FirstComp;
