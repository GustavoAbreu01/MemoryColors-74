import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'animate.css';
import '../src/theme/coolors.css'
import Game from './pages/game/Game';
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="memory" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
