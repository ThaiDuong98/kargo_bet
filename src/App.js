import { Route, Routes } from 'react-router-dom';
import './App.css';
import Game from './page/Game';
import InitialGame from './page/InitialGame';

function App() {
  return (
    <div>
      <h1 style={{textAlign: "center", marginTop: "5px", fontWeight: "bold", color: "	#00FF00"}}>Welcome to Kargo bet</h1>
      <Routes>
        <Route path='/' element={<InitialGame />}/>
        <Route path='/game' element={<Game />}/>
      </Routes>
    </div>
  );
}

export default App;
