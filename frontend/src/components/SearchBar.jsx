import { FaSearch } from "react-icons/fa";

function SearchBar({
  value,
  onChange,
  placeholder = "Search...",
}) {
  return (
    <div className="position-relative mb-4">
      <FaSearch
        className="position-absolute top-50 translate-middle-y ms-3 text-muted"
      />

      <input
        type="text"
        className="form-control ps-5 py-2"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBar;