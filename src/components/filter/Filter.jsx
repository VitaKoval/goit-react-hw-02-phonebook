import React from 'react';

const Filter = ({value, onChange}) => {
  return (
    <div>
          <label>
            Find contacts by name
            <input
              type="text"
              name="filter"
              // pattern=""
              title="Filter is case insensitive"
              value={value}
              onChange={onChange}
            />
          </label>
        </div>
  );
};

export default Filter;
