import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';


function App() {
  document.title = "Fritadeira Elétrica sem Óleo/Air Fryer Mondial Family AFN-40-BI Preto 4L com Timer";
  
  return (
    <Router>
        <Routes>
          <Route 
            path="/fritadeira-eletrica-sem-oleo-air-fryer-mondial-family-afn-40-bi-preto-4l-com-timer" 
            element={<Home/>} 
          />
          <Route 
            path="*" 
            element={<Navigate to="/fritadeira-eletrica-sem-oleo-air-fryer-mondial-family-afn-40-bi-preto-4l-com-timer" />} 
          />
        </Routes>
    </Router>
  );
}

export default App;
