import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import DoggosList from './components/DoggosList';
import MainPage from './components/MainPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/volunteers/" element={<MainPage/>}></Route>
          <Route path="/dogs/list" element={<DoggosList/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
