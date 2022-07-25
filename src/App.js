import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes} from 'react-router-dom';
import { Login } from './page/Login';
import { ProductAll } from './page/ProductAll';
import { Navbar } from './component/Navbar';
import { useEffect, useState } from 'react';
import { PrivateRoute } from './routes/PrivateRoute';

function App() {
  const [auth,setAuth]=useState(false)//true면 로그인이됨.
  useEffect(()=>{
    console.log(auth)
  },[auth])
  return (
    <div className="App">
      <Navbar setAuth={setAuth} auth={auth}/>
      <Routes>
        <Route path='/' element={<ProductAll/>}/>
        <Route path='/login' element={<Login setAuth={setAuth} />} />
        <Route path='/product/:id' element={<PrivateRoute auth={auth}/>}/>
      </Routes>
    </div>
  );
}

export default App;
//json-server --watch db.json --port 3004
