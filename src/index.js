import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';
import './index.css';

class Game extends React.Component {
    state = {
        height: 10,
        width: 8,
    };

    handleGameStart = () => {
    }

    render() {
        const { height, width} = this.state;
        return (
            <div className="game">
                <div className="game-info" />
                <Board height={height} width={width}  />
            </div>
        );
    }
}

ReactDOM.render(<Game />, document.getElementById('root'));
