import React, { Fragment } from "react";

import "./UserInput.css";

const UserInput = ({ label, type, value, onValueChange, style }) => {
  return (
    <Fragment>
      <label className="input-label">{label}</label>
      <input
        className="input"
        type={type}
        value={value}
        onChange={onValueChange}
        style={style}
      />
    </Fragment>
  );
};

export default UserInput;
