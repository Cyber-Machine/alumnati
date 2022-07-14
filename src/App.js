import { Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import AlumniPage from './Pages/AlumniPage';
import Resources from './Pages/Resources';
import Update from './Components/Update';
function App() {
  return (
  <>
    <Routes>
    <Route exact path = "/" element = {<LoginPage/>} />
    <Route exact path = "/Dashboard" element = {<Dashboard/>} />
    <Route exact path = "/Alumni" element = {<AlumniPage/>} />
    <Route exact path = "/Resources" element = {<Resources/>} />
    <Route exact path ='/Update' element = {<Update/>}/>
    </Routes>
  </>
  );
}

export default App;
