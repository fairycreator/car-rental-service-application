import React from "react";

const Filters = ({ makes, selectedMake, onMakeSelect }) => {
  return (
    <div className="filters">
      <select
        value={selectedMake}
        onChange={(e) => onMakeSelect(e.target.value)}
      >
        <option value="">All Brands</option>
        {makes.map((make, index) => (
          <option key={index} value={make}>
            {make}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
