import React from 'react';
import logo from './logo.svg';
import './App.css';
import Per2 from "./Person2"
import {Person3} from "./Person3"
import {Person4, PPerson, My} from "./Person4"

function App() {
    return (
        <div className="App">
            <h1>안녕하세요. React입니다.</h1>
            <h1>2번째 줄입니다</h1>
            <Person/>
            <Per2/>
            <Person3/>
            <Person4/>
            <PPerson/>
            <My/>
        </div>
    );
}

/*
function Person() {
    return <h1>첫번째 컴포넌트 입니다</h1>
}
/*/
const Person = () => {
    return <h1>첫번째 컴포넌트 입니다</h1>
}
//*/

export default App;
