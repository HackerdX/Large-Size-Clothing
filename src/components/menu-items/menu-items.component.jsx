import React from 'react';
import './menu-item.styles.scss';

export const MenuItems = ({ title, imageUrl, size }) =>{
    return(
        <div style = {{
            backgroundImage: `url(${imageUrl})`
        }} className={`${size} menu-item`}>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="sub-title">Shop Now</span>
            </div>
        </div>
    )
}
