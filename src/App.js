import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 49
        }
    }

    onClickhandler = (payload) => {
        console.log(this)
        this.setState({number: this.state.number + payload})
    }

    render() {
        return (
            <div className="App">
                <Display value={this.state.number}/>
                <Button onClick={() => this.onClickhandler(1)}>증가버튼</Button>
                <Button onClick={() => this.onClickhandler(-1)}>증가버튼</Button>
            </div>
        );
    }
}

const Button = ({children, clickHandler}) =>
    <div>
        <button onClick={clickHandler}>{children}</button>
    </div>

const Display = ({value}) =>
    <div>
        <h1>{value}</h1>
    </div>

export default App;
