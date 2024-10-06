import React from 'react'
import CartIcon  from '../Images/Icons/CartIcon.png'
import LoginIcon from '../Images/Icons/enter.png'
import { useNavigate,Link } from 'react-router-dom'
function Navbar() {
  const navigate=useNavigate()
    const Handle_LoginIcon=()=>{
      
       navigate('/')
    }
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="ml-auto navbar-nav">
            <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="#">Features</a>
            <a class="nav-item nav-link" href="#">Pricing</a>
            
            <img src={CartIcon} style={{height: "30px"}} alt='Icon' className="ml-2"/>
            <img src={LoginIcon} style={{height: "30px"}} alt='Icon' className="ml-2" onClick={Handle_LoginIcon}/>
        </div>
    </div>
</nav>
    </div>
  )
}

export default Navbar
