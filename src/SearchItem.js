import { useDispatch } from "react-redux";
import { searchToDo } from "./actions/searchAction";
import { useSelector } from "react-redux";

const SearchItem = () => {
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.search);

  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input
        id="search"
        type="text"
        role="searchbox"
        placeholder="Search Items"
        value={searchText}
        onChange={(e) => searchToDo(dispatch)(e.target.value)}
      />
    </form>
  );
};

export default SearchItem;
