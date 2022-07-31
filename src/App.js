import { Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import AlumniPage from './Pages/AlumniPage';
import Resources from './Pages/Resources';
import UpdateP from './Pages/Update';
import SignUp from './Pages/SignUp';
function App() {
  return (
  <>
    <Routes>
    <Route exact path = "/" element = {<LoginPage/>} />
    <Route exact path = "/Dashboard" element = {<Dashboard/>} />
    <Route exact path = "/Alumni" element = {<AlumniPage/>} />
    <Route exact path = "/SignUp" element = {<SignUp/>} />
    <Route exact path = "/Resources" element = {<Resources/>} />
    <Route exact path ='/Update' element = {<UpdateP/>}/>
    </Routes>
  </>
  );
}

export default App;
