import React, { useState } from "react";

const Search = ({ getQuery }) => {
  //? getQuery는 함수 .
  const [text, setText] = useState("");

  const handler = (e) => {
    setText(e.target.value);
    getQuery(e.target.value);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search characters"
          autoFocus
          value={text}
          onChange={handler}
        ></input>
      </form>
    </section>
  );
};

export default Search;
