import React from 'react';

interface Props {
  selectedFilter: string;
  setSelectedFilter: Function;
}

const Filter: React.FC<Props> = ({ selectedFilter, setSelectedFilter }) => {
  const filters = ['software', 'hardware', 'other'];

  return (
    <div className='filters'>
      {filters.map(filter => (
        <div
          key={filter}
          className={`filter ${selectedFilter === filter ? 'selected' : ''}`}
          onClick={() => {
            if (selectedFilter === filter) {
              setSelectedFilter('');
            } else {
              setSelectedFilter(filter);
            }
          }}
        >
          {filter}
        </div>
      ))}
    </div>
  );
};

export default Filter;
