import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 49
        }
        this.onClickhandler = this.onClickhandler.bind(this)
        this.onClickhandlerMinus = this.onClickhandlerMinus.bind(this)
    }

    onClickhandler() {
        this.setState({number: this.state.number + 1})
    }

    onClickhandlerMinus() {
        this.setState({number: this.state.number - 1})
    }

    render() {
        return (
            <div className="App">
                <Display value={this.state.number}/>
                <div>
                    <button onClick={this.onClickhandler}>증가버튼</button>
                </div>
                <div>
                    <button onClick={this.onClickhandlerMinus}>감소버튼</button>
                </div>
            </div>
        );
    }
}

const Display = ({value}) =>
    <div>
        <h1>{value}</h1>
    </div>

export default App;
