import HomePage from './components/HomePage';
import { Routes,Route } from 'react-router-dom';
import Store from './components/Store';
import Game from './components/Game';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/store' element={<Store />} />
        <Route path='/game/:id' element={<Game />} />
      </Routes>
      
    </div>
  );
}

export default App;
