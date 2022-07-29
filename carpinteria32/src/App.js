
import './App.css';
import Home from './componentes/Home';
import Servicios from './componentes/Servicios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from './componentes/NavigationBar';

function App() {
  return (
    <div>
      
      <div>
        <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route exact path='/' caseSensitive={false} element={<Home />} />
          <Route exact path='/Home' caseSensitive={false} element={<Home />} />
          <Route exact path='/Servicios' caseSensitive={false} element={<Servicios />} />
          
        </Routes>
        </BrowserRouter>
      </div>

    </div>
  );
}

export default App;
