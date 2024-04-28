import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import css from "../SearchBox/search.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searchBoxContainer}>
      <h3 className={css.searchBoxTitle}>Find contacts by name</h3>
      <input
        type="text"
        value={nameFilter}
        onChange={handleChange}
        placeholder="Search by name"
        className={css.searchInput}
      />
    </div>
  );
};

export default SearchBox;
