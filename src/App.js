
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/Single/Single';
import New from './pages/new/New';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route index path='/' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='/users'>
        <Route index element={<List />} />
        <Route path=':userId' element={<Single />} />
      </Route>
      <Route path='products'>
        <Route index element={<List />} />
        <Route path=':productId' element={<Single />} />
        <Route path='new' element={<New />} />
      </Route>
     </Routes>
    </div>
  );
}

export default App;
