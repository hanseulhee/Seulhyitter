import React from "react";

const Shyweet = ({ shyweetObj, isOwner }) => (
  <div>
    <h4>{shyweetObj.text}</h4>
    {isOwner && (
      <>
        <button>Delete</button>
        <button>Edit</button>
      </>
    )}
  </div>
);

export default Shyweet;
