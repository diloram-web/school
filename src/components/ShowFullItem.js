import React, { Component } from 'react';
import {FaRegWindowClose } from 'react-icons/fa';

export class ShowFullItem extends Component {
    render() {
        return (
            <div className='full-item'>
                <div>
                    <FaRegWindowClose className='close-window' onClick={() => this.props.onShowItem(this.props.item)}/>
                    <img src={'../img/'+ this.props.item.img}  alt="foto"/>
                    <h2>{this.props.item.title}</h2>
                    <p>{this.props.item.desc}</p>
                    
                    {/* <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>  */}
                </div>   
            </div>
        );
    }
}

export default ShowFullItem;