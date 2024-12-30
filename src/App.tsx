import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';


function App() {
  document.title = "Fritadeira Elétrica sem Óleo/Air Fryer Mondial Family AFN-40-BI Preto 4L com Timer";
  
  return (
    <Router>
        <Routes>
          <Route 
            path="/" 
            element={<Home/>} 
          />
        </Routes>
    </Router>
  );
}

export default App;
