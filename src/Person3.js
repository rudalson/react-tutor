import React from "react";

class Person3 extends React.Component {

    // render() {
    //     return (
    //         <div>
    //             <h1>이름은 : {this.props.name} 나이는 : {this.props.age}</h1>
    //         </div>
    //     )
    // }
    render() {
        const {name, age} = this.props;
        return (
            <div>
                <h1>이름은 : {name} 나이는 : {age}</h1>
            </div>
        )
    }
}

export {Person3};
