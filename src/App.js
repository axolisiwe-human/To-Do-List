import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';
import ToDo from './ToDo';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Login/> } />
          <Route path='registration' element={ <Registration/> }/>
          <Route path='login' element={ <Login/> }/>
          <Route path='todo' element={<ToDo/>} />
     
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
