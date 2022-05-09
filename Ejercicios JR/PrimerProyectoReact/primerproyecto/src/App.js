import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Delfi1 from './Components/Delfi1';
import Delfi2 from './Components/Delfi2';
import Delfi3 from './Components/Delfi3';
import Delfi4 from './Components/Delfi4';
import Delfi5 from './Components/Delfi5';
import Delfi6 from './Components/Delfi6';
import Navegacion from './Components/Navegacion';

function App() {
  return (
    <div className="">
     <Router>
       <Route path="/Delfi1" component={Delfi1}/>
       <Route path="/Delfi2" component={Delfi2}/>
       <Route path="/Delfi1" component={Delfi3}/>
       <Route path="/Delfi2" component={Delfi4}/>
       <Route path="/Delfi1" component={Delfi5}/>
       <Route path="/Delfi2" component={Delfi6}/>

       <Navegacion/>
     </Router>
    </div>
  );
}

export default App;
