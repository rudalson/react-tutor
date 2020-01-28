import React from 'react';

const Button = ({className, children, clickHandler}) =>
    <div>
        <button className={className} onClick={clickHandler}>{children}</button>
    </div>

export default Button;
