import './App.css';
import CustomButton from './components/button';
import CustomInput from './components/input';

function App() {
  return (
    <div className="App">
      <CustomInput 
        value={""}
        onChange={(e) => {}}
        placeholder="Input here"
      />
      <CustomButton label="Send" onClick={() => {}} />
    </div>
  );
}

export default App;
