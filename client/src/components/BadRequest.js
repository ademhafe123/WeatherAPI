import React from "react";

const BadRequest = (props) => {
  return (
    <div>
      {props.badRequest && (
        <div>
          <h1 className="error-msg">{props.errorMessage}</h1>
          <h3>Please try again...</h3>
        </div>
      )}
    </div>
  );
};
export default BadRequest;
