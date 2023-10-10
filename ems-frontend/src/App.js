import './App.css';
import { BrowserRouter as Router , Route ,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import AllEmployeeComponents from './components/AllEmployeeComponents';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import NewEmployeeComponent from './components/NewEmployeeComponent';

function App() {
  return (
    <div >
      <Router>
        <HeaderComponent />
        <div className='container'>
          <Routes>
            <Route path='/' element={<AllEmployeeComponents/>} ></Route>
            <Route path='/employees' element={<AllEmployeeComponents/>} ></Route>
            <Route path='/add-employee' element={<NewEmployeeComponent/>} ></Route>
            <Route path='/edit-employee/:id' element={<NewEmployeeComponent/>} ></Route>
          </Routes>
        </div>
      </Router>
      
      {/* <AllEmployeeComponents /> */}
      <FooterComponent />
    </div>
  );
}

export default App;
