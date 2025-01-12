import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  function handleQuery(e) {
    setQuery(e.target.value);
  }

  function handleSumbit(e) {
    e.preventDefault();
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSumbit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => handleQuery(e)}
      />
    </form>
  );
}

export default SearchOrder;
