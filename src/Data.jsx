import React, { useState } from 'react';

const SearchWithDatalist = () => {
  const [showDatalist, setShowDatalist] = useState(false);

  const toggleDatalist = () => {
    setShowDatalist(!showDatalist);
  };

  return (
    <div>
      <button onClick={toggleDatalist}>Actions</button>
      {showDatalist && (
        <div>
        <button>Find People</button>
        <button>Draft Email</button>
        <button>Craete</button>
        </div>
      )}
    </div>
  );
};

export default SearchWithDatalist;
