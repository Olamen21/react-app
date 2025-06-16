import './App.css';
import CustomInput from './components/input';
import CustomButton from './components/button';
import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleClick = () => {
    if (!inputValue.trim()) {
      setError('Vui lòng không để trống!');
    } else {
      setError('');
      alert(`Bạn đã nhập: ${inputValue}`);
    }
  };
  return (
    <div className="App">
      <CustomInput 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Input here..."
        error={error}
        maxLength={10}
      />
      <CustomButton label="Send" onClick={handleClick} />
    </div>
  );
}

export default App;
