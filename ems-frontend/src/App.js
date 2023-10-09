import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import AllEmployeeComponents from './components/AllEmployeeComponents';
import HeaderComponent from './components/HeaderComponent';
function App() {
  return (
    <div >
      <HeaderComponent />
      <AllEmployeeComponents />
    </div>
  );
}

export default App;
