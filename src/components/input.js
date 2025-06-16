import React from 'react';
import './CustomInput.css';

function CustomInput({ value, onChange, placeholder, error, maxLength }) {
  return (
    <div className="custom-input-container">
      <input 
        type="text" 
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        className={`custom-input ${error ? 'input-error' : ''}`}
      />
      {maxLength && (
        <div className="custom-input-count">
          {value.length}/{maxLength} ký tự
        </div>
      )}
      {error && <div className="custom-input-error">{error}</div>}
    </div>
  );
}

export default CustomInput;
