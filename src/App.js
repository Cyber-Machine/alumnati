import { Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import AlumniPage from './Pages/AlumniPage';
import Resources from './Pages/Resources';
function App() {
  return (
  <>
    <Routes>
    <Route exact path = "/" element = {<LoginPage/>} />
    <Route exact path = "/Dashboard" element = {<Dashboard/>} />
    <Route exact path = "/Alumni" element = {<AlumniPage/>} />
    <Route exact path = "/Resources" element = {<Resources/>} />
    
    </Routes>
  </>
  );
}

export default App;
