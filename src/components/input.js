import React from 'react';
import './CustomInput.css';

function CustomInput({ value, onChange, placeholder, error }) {
  return (
    <div className="custom-input-container">
      <input 
        type="text" 
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`custom-input ${error ? 'input-error' : ''}`}
      />
      {error && <div className="custom-input-error">{error}</div>}
    </div>
  );
}

export default CustomInput;
