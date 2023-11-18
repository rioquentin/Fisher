import './App.css';
import Play from './Components/Script/Play';
import Game from './Components/Script/Game';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Play />} />
        <Route path="/game" element={<Game />} />
    </Routes>
  );
}

export default App;
