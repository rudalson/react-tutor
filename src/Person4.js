import React from "react";


const Person4 = () => <h1>세번째 컴포넌트 입니다</h1>

const PPerson = () => (
    <div>
        <h1>복합 첫번째 컴포넌트 입니다</h1>
        <h1>복합 두번째 컴포넌트 입니다</h1>
        <My/>
    </div>
)

const My = () => {  //ES6
    return <h1>My 컴포넌트 입니다</h1>
}

export {Person4, PPerson, My};
