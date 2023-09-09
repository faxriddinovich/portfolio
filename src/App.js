import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import Resume from './Components/Resume/Resume';
import Portfolio from './Components/Portfolio/Portfolio';
import Blog from './Components/Blog/Blog';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<Resume/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes> 
    </>
  );
}

export default App;
