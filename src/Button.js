import React from 'react';
import { Button } from 'react-bulma-components';

const Btn = ({color, children, clickHandler}) =>
    <div>
        <Button fullwidth={true} color={color} onClick={clickHandler}>{children}</Button>
    </div>

export default Btn;
