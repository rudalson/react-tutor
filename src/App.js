import React from 'react';
import Button from './Button';
import Display from './Display';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 49
        }
    }

    onClickhandler = (payload) => {
        this.setState({number: this.state.number + payload});
    }

    render() {
        return (
            <div className="App">
                <Display value={this.state.number}/>
                <Button clickHandler={() => this.onClickhandler(1)}>증가버튼</Button>
                <Button clickHandler={() => this.onClickhandler(-1)}>감소버튼</Button>
            </div>
        );
    }
}

export default App;
