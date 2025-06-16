import React from 'react';
import './CustomInput.css';

function CustomInput({ value, onChange, placeholder, maxLength }) {
  return (
    <div className="custom-input-container">
      <input 
        type="text" 
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {maxLength && (
        <div className="custom-input-count">
          {value.length}/{maxLength} ký tự
        </div>
      )}
    </div>
    
  );
}

export default CustomInput;
