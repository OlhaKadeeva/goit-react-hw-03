import css from "./SearchBox.module.css";
const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css.wraper}>
      <p className={css.text}>Find contact by name</p>
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
