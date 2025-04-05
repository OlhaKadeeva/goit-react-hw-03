import css from "./SearchBox.module.css";
const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css.wraper}>
      <p className={css.text}>Find contact by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
