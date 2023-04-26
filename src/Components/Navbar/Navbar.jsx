// import React from 'react'
import '../../Style/navbar.css'

function Navbar() {

    const values= ['Home','Service',"Portfolio","Our Clients","Contact"]
  return (
    <>
        <div className='navbar-left'>
            <section>
                Logo
            </section>
        {/* </div>
        <div > */}
        <section>
            <ul className='navbar-right'>
            {values.map( (val,index) =>{
                return(
                    <div key={index}>
                        <li className='navbar-list'>{val}</li>
                    </div>
                )
            })
        }
        </ul>
        </section>
        </div>
    </>
  )
}

export default Navbar
