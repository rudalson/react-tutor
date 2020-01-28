import React from 'react';
import './App.css';
import Person2 from "./Person2"
import {Person3} from "./Person3"

class App extends React.Component {
    state = {
        person: [
            {name: "홍길동", age: 26},
            {name: "고길동", age: 46},
            {name: "머스크", age: 36},
        ]
    }

    // render() {
    //     return (
    //         <div className="App">
    //             <Person2 name={this.state.person[0].name} age={this.state.person[0].age}/>
    //             <Person2 name={this.state.person[1].name} age={this.state.person[1].age}/>
    //             <Person3 name={"이순신"} age={35}/>
    //         </div>
    //     );
    // }

    render() {
        const {person} = this.state;
        const myfun = () => {
            console.log("test")
        };
        return (
            <div className="App">
                <Person2
                    name={"강감찬"}
                    age={45}
                    myfun={myfun}
                    st={this.state}
                />
            </div>
        );
    }
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
