import './App.css';
import { BrowserRouter as Router , Route ,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import AllEmployeeComponents from './components/AllEmployeeComponents';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div >
      <Router>
        <HeaderComponent />
        <div className='container'>
          <Routes>

          </Routes>
        </div>
      </Router>
      
      <AllEmployeeComponents />
      <FooterComponent />
    </div>
  );
}

export default App;
