/* import './App.css'; */
import Background from './Components/Background/Background';
import Calculator from './Main/Calculator';

function App() {
  return (
    <div className="App">
      <h1>Calculator</h1>
      {/* <Calculator/> */}
      <Background>
        <Calculator/>
      </Background>
    </div>
  );
}

export default App;
