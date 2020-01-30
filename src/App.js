import React from 'react';

class App extends React.Component {
    state = {
        tasks: [
            {todo: '할일 1'},
            {todo: '할일 2'},
        ],
        task: ''
    };

    onClickHandler = (e) => {
        const task = {todo: this.state.task};
        this.setState({
            tasks: [task],
            task: ''
        });
        console.log(this.state.tasks);
    };

    onChangeHandler = (e) => {
        this.setState({
            task: e.target.value
        })
    };

    render() {
        const taskDisplay = this.state.tasks.map((task, i) => {
            return (
                <div key={i}>
                    <p>{task.todo}</p>
                    <button>delete</button>
                </div>
            )
        });

        return (
            <div className="App">
                <div>
                    <input value={this.state.task} onChange={this.onChangeHandler}></input>
                    <button onClick={this.onClickHandler}>저장</button>
                </div>
                <div>
                    {taskDisplay}
                </div>
            </div>
        );
    }
}

export default App;
