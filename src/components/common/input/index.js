import React, { useMemo } from "react";
import PropTypes from "prop-types";

function makeId(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

const Input = ({ type, labelName, handleChange }) => {
  const randomId = useMemo(() => makeId(10), []);
  return (
    <>
      <input
        type={type}
        id={randomId}
        autoComplete={"new-password"}
        onChange={({ target: { value } }) => {
          handleChange(value);
        }}
      />
      <label htmlFor={randomId}>{labelName}</label>
    </>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(["text", "password"]),
  labelName: PropTypes.string.isRequired,
};

export default Input;
