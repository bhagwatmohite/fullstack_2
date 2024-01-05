
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddUser from './Users/AddUser';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navbar from './Layout/Navbar';
// import MyComponent from './MyComponent'; // Assuming MyComponent is the default export

import Home from './Pages/Home';
import EditUser from './Users/EditUser';
import ViewUser from './Users/ViewUser';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
      
      <Routes >
      <Route exact path ='/' element={<Home/>}/>
      <Route exact path ='/adduser' element={<AddUser/>}/>
      <Route exact path ='/edituser/:id' element={<EditUser/>}/>
      <Route exact path ='/viewuser' element={<ViewUser/>}/>
      </Routes>

      

      </Router>
      
    </div>
  );
}

export default App;
