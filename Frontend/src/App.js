import './App.css';
import UserRoutes from './components/UserRoutes';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <UserRoutes/>
    </div>
  );
}

export default App;
