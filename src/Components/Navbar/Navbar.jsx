// import React from 'react'
import '../../Style/navbar.css'
import navbarLogo from '../../assets/nicozn/Niconzn_name_dark.png'
import hamburger from '../../assets/icons/Hamburger_menu.png'
import { useRef } from 'react'

function Navbar() {
    const hamburgerIcon = useRef()

    const values= ['Home','Service',"Portfolio","Our Clients","Contact"]
    const routeValues=['home','service','portfolio','client','contact']
    const displayToggle = () =>{
        // const toogleButton = hamburgerButton.current.classList[0]
        const result = hamburgerIcon.current.classList.toggle('active')
        console.log(result);
    }
  return (
    <nav className='navbar-main'>
       <div className="navbar-logo">
            <img src={navbarLogo} />
       </div>

        <button 
        className='navbar-hamburger' onClick={displayToggle}>
            <img src={hamburger} 
            className='hamburger-con'
            
            />
        </button>

       <div className="navbar-link" ref={hamburgerIcon}>
        <ul>
            {
                values.map((navText,index)=>{
                    console.log(`#`+routeValues[index])
                    return(
                        
                        <li key={index}>
                            <a href={`#`+routeValues[index]} className='navbar-link-list'>{navText} </a>
                        </li>
                    )
                })
            }
        </ul>
       </div>
    </nav>
  )
}

export default Navbar
