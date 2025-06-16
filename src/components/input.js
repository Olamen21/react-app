import React from 'react';
import './CustomInput.css';

function CustomInput({ value, onChange, placeholder }) {
  return (
    <input 
      type="text" 
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default CustomInput;
