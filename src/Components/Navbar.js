    import React from 'react';
import {Link,NavLink} from 'react-router-dom';

const Navbar = () =>{
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                
                    <ul className="right">
                        <li className="mx-1"><Link to="/">Home</Link></li>
                        <li className="mx-1"><Link to="/about">About</Link></li>
                        <li className="mx-1"><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
            </div>
        </nav>
    )
}
     
export default Navbar ;


    
