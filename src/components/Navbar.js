import React from 'react';
import { FaSchool } from "react-icons/fa";
import { Link } from 'react-router-dom';

//import {FaShoppingCart} from "react-icons/fa";
//import Order from './Order';




// const showOrders = (props) => {
//     let summa = 0;
//     props.orders.forEach(el => summa += Number.parseFloat(el.price))
//   return( <div> {props.orders.map(el => (
//         <Order onDelete={props.onDelete} key={el.id} item={el} />
//     ))}
//     <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}$</p>
//     </div>)

// }
// const showNothing = () => {
//     return(<div className='empty'>
//         <h2>Товаров нет</h2>
//     </div>)
// }


export default function Header(props) {
    // let [cartOpen,setCartOpen] = useState(false)
    return (
        <header>
            <div className='header-content'>
            <div className='wrapper'>
                   <span className='logo'><FaSchool  className='icon-school'/>  А.Файзиев</span>
                <ul className='nav'>
                    <li><Link className='my-link' to="/">Биз жөнүндө</Link></li>
                    <li><Link className='my-link' to="/about">Адрессибиз</Link></li>
                    <li><Link className='my-link' to="/contact">Телефон</Link></li>
                </ul>
                {/* <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/> 
                {cartOpen && (
                    <div className='shop-cart'>
                       
                        {props.orders.length > 0 ?
                        showOrders(props) : showNothing()}
                     </div>
                )}  */}
            </div> 
            
            </div>
            <div className='presentation'>
            </div>
            
        </header>
    );
}