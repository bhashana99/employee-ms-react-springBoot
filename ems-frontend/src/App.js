import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import AllEmployeeComponents from './components/AllEmployeeComponents';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div >
      <Router></Router>
      <HeaderComponent />
      <AllEmployeeComponents />
      <FooterComponent />
    </div>
  );
}

export default App;
