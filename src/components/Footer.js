import React, { Component } from 'react';
import { FaSchool } from 'react-icons/fa';

class Footer extends Component {
    render() {
        return (
            
                <footer>
                     <span className='logo'><FaSchool  className='icon-school'/>  А.Файзиев. </span>
                      Все право защищены &copy;2025year.Frontend devolopment :Akhmadalieva Diloram Usmanalievna.
                </footer>  
        
        );
    }
}

export default Footer;