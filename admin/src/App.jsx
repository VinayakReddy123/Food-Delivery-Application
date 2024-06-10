import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Sidebar  from './components/sidebar/Sidebar';
import {Routes,Route} from 'react-router-dom';
import Add from './pages/add/Add';
import List from './pages/list/List';
import Order from './pages/orders/Order';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div>
      <ToastContainer />
       <Navbar />
       <hr />
       <div className="app-content">
          <Sidebar />
          <Routes>
             <Route path='/add' element={<Add />} />
             <Route path='/list' element={<List />} />
             <Route path='/order' element={<Order />} />
          </Routes>
       </div>
    </div>
  )
}

export default App
