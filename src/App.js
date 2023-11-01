
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home/Home';
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
