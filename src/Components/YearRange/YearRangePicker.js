import React, { useState } from "react";
import isValidYear from "../../Utils/isValidYear";

export default function YearRangePicker(props) {
  const [to, setTo] = useState(null);
  const [from, setFrom] = useState(null);
  const isValid =
    parseInt(from) < parseInt(to) && isValidYear(from) && isValidYear(to);

  return (
    <div className="container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.onSubmit({ to, from });
        }}
      >
        <input
          className='date-input'
          type="text"
          placeholder="From Year"
          value={from || ''}
          onChange={(e) => setFrom(e.target.value)}
        ></input>
        <input
          className='date-input'
          type="text"
          placeholder="To Year"
          value={to || ''}
          onChange={(e) => setTo(e.target.value)}
        ></input>
        <button type="submit" disabled={!isValid}>
          Submit
        </button>
      </form>
    </div>
  );
}
