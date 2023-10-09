import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import AllEmployeeComponents from './components/AllEmployeeComponents';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div >
      <HeaderComponent />
      <AllEmployeeComponents />
      <FooterComponent />
    </div>
  );
}

export default App;
