import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes,Route,Link } from 'react-router-dom';
import Home from './pages/home'
import Create from './pages/create'
import Edit from './pages/edit'
import View from './pages/view'

function App() {
  return (
    <div >
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Thomas Aquino</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to={"/"} className='nav-link'>Home</Link>
        </li>
        <li class="nav-item">
          <Link to={"/create"} className='nav-link'>Create</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div className='container'>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/create' element={<Create/>}/>
    <Route path='/edit/:id' element={<Edit/>}/>
    <Route path='/view/:id' element={<View/>}/>
  </Routes>
</div>
    </div>
  );
}

export default App;
