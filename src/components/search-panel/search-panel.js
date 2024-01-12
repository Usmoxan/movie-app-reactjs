
import { useState } from "react";
import "./search-panel.css";

const SearchPanel = (propp) => {


  const [term, setTerm] = useState("")

  const updateTermHandler = (e) => {
    const term = e.target.value.toLowerCase();
    setTerm(term)
    propp.updateTermHandler(term)

  };


  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Kinolani qidirish"
      onChange={updateTermHandler}
      value={term}
    />
  );
}


export default SearchPanel;
