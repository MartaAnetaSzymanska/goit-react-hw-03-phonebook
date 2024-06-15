import PropTypes from "prop-types";

export const Filter = ({ filter, setFilter }) => {
  const handleFilterChange = (ev) => {
    setFilter(ev.target.value);
  };

  return (
    <div>
      <p>Find contact by name:</p>
      <input
        type="text"
        name="filter"
        placeholder="Search by name"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};
