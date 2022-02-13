import React, {useState} from 'react'
import logo from '../../img/logo.png'
import './Header.css'
import {FaTimes, FaBars} from 'react-icons/fa'
export default function Header() {

    const [click,setClick] = useState(false);

    function handleClick(){
        setClick(prev=>!prev)
    }
    console.log(click);

    const style = {
      backgroundColor : "#ffffff"
    }

    return (
    <header className={click?"header header-mobile":"header"}> 
      <a href="#">
        <img className="logo" alt="Start Ladder" src={logo} />
      </a>

      <nav className={click?"main-nav active":"main-nav"}>
        <ul className="main-nav-list">

          <li>
                <select className="main-nav-link" name="programs" id="programs">
                    <option value="programs">Programs</option>
                    <option value="opt1">Option 1</option>
                    <option value="opt2">Option 2</option>
                    <option value="opt3">Option 3</option>
                </select>
              
         </li>
          <li>
                <select className="main-nav-link" name="projects" id="projects">
                    <option value="programs">Live Projects</option>
                    <option value="opt1">Option 1</option>
                    <option value="opt2">Option 2</option>
                    <option value="opt3">Option 3</option>
                </select>
          </li>
          <li><a className="main-nav-link text" href="#">Community</a></li>
          <li>
                <select className="main-nav-link" name="jobs" id="jobs">
                    <option value="programs">Jobs</option>
                    <option value="opt1">Opt 1</option>
                    <option value="opt2">Opt 2</option>
                    <option value="opt3">Opt 3</option>
                </select>    
          </li>
          <li><a className="main-nav-link text" href="#">About</a></li>
        </ul>
      </nav>
        
        <div className="btn-mobile-nav" onClick={handleClick}>
            {click ? <i ><FaTimes size="1.5rem" color = "#6776FF"/></i> : <i><FaBars size="1.5rem" color = "#6776FF"/></i>}
        </div>
    </header>
    )
}
