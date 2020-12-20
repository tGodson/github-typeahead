import React from 'react';
import '../style/typeaheadDropdown.css';

const TypeAheadDropDown = () => {
  const onTextChange = (e) => {
    const value = e.target.value;
    if (value.length > 0) {
      return value;
    }
  }
 
  return (
    <div className="TypeAheadDropDown">
      <input onChange={onTextChange} placeholder="Search user" type="text" />
    </div>
  );
 
}
export default TypeAheadDropDown;