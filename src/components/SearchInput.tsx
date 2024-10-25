import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchInput() {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/search?term=${term}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search package..."
      />
    </form>
  );
}

export default SearchInput;
