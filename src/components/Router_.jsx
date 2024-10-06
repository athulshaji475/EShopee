import React from 'react'
import {BrowserRouter,Route,Routes}  from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import ViewMoreDetails from './ViewMoreDetails'
function Router_() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
             <Route path='/' element={<Login/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Details/:ShoesName' element={<ViewMoreDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router_
