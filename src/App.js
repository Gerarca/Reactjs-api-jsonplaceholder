import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './pages/layout/header';
import Home from './pages/index';
import TaskList from './pages/tasks/TaskList';
import DetailsTask from './pages/tasks/detailsTask';

function App() {

  const id = 0;
  return (
    <BrowserRouter>
      <Header />
      <Routes>
         <Route path='/' element={<Home/>}></Route> 
         <Route path='/task' element={<TaskList />}></Route>
         <Route path='/task/:id' element={<DetailsTask />}></Route>
      </Routes>    
    </BrowserRouter>
  );
}

export default App;
