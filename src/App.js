// src/App.js
import React, { useState } from 'react';
import './App.css';
import CustomInput from './components/input';
import CustomButton from './components/button';

function App() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="App">
      <CustomInput
        label="Nhập tên:"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Tối đa 10 ký tự"
        maxLength={10}
      />
      <CustomButton label="Gửi" onClick={() => {}} />
    </div>
  );
}

export default App;
