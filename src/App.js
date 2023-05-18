import HomePage from './components/HomePage';
import { Routes,Route } from 'react-router-dom';
import Store from './components/Store';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/store' element={<Store />} />
      </Routes>
      
    </div>
  );
}

export default App;
