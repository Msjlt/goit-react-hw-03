import css from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div>
      <input
        className={css.input}
        type="text"
        placeholder="Search contacts..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
