import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/dogs/" element={<MainPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
