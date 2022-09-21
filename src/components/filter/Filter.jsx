import React from 'react';
import { nanoid } from 'nanoid';
import { Containerfilter, LabelFilter, InputFiler } from '../ui/Filter.styled';

const Filter = ({ value, onChange }) => {
  const filterInputId = nanoid();
  return (
    <Containerfilter>
      <LabelFilter htmlFor={filterInputId}>
            Find contacts by name  </LabelFilter> 
            <InputFiler
              type="text"
              name="filter"
              // pattern=""
        placeholder='Enter a name for the search query'
        id={filterInputId}
              title="Filter is case insensitive"
              value={value}
              onChange={onChange}
            />
         
        </Containerfilter>
  );
};

export default Filter;
