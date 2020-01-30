import React from 'react';

class App extends React.Component {
    state = {
        tasks: [],
        task: ''
    };

    onClickHandler = (e) => {
        console.log(e.target);
    };

    onChangeHandler = (e) => {
        this.setState({
            task: e.target.value
        })
    };

    render() {
        return (
            <div className="App">
                <div>
                    <input value={this.state.task} onChange={this.onChangeHandler}></input>
                    <button onClick={this.onClickHandler}>저장</button>
                </div>
            </div>
        );
    }
}

export default App;
