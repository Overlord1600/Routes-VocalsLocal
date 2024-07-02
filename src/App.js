
import './App.css';
import CustomHome from './pages/Home';
import CustomLogin from './pages/CustomLogin';
import SignUp from './pages/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <CustomHome/>
      <CustomLogin/>
     
      
    </div>
  );
}

export default App;
