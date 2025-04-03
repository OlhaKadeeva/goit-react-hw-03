const SearchBox = ({ value, onChange }) => {
  return (
    <input type="text" placeholder="Search" value={value} onChange={onChange} />
  );
};

export default SearchBox;
