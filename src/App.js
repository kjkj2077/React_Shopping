import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes,Link } from 'react-router-dom';
import { Login } from './page/Login';
import { ProductAll } from './page/ProductAll';
import { ProductDetail } from './page/ProductDetail';
import { Navbar } from './component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<ProductAll/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product/:id' element={<ProductDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
//json-server --watch db.json --port 3004
