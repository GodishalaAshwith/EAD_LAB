import React from "react";

const Ofe = () => {
  const onFocusHandler = () => {
    console.log("Focus event triggered!");
  };

  return (
    <>
      <input className="form-control" type="text" onFocus={onFocusHandler} />
    </>
  );
};

export default Ofe;
