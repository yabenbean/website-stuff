import React from "react";

import "./mapform.style.css";

const MapForm = ({ handleSubmit, handleClick, id, className }) => (
  <form onSubmit={handleSubmit} className={className}>
    <button
      className={"btn btn-warning " + (id == 1 ? "active" : "")}
      name="id"
      value={1}
      onClick={handleClick}
      type="submit"
    >
      Air Quality
    </button>
  </form>
);

export default MapForm;
