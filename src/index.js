import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';
import './index.css';

class Game extends React.Component {
    state = {
        height: 8,
        width: 8,
        mines: 15,
    };

    handleGameStart = () => {
    }

    render() {
        const { height, width, mines } = this.state;
        return (
            <div className="game">
                <div className="game-info" />
                <Board height={height} width={width}  mines={mines} />
            </div>
        );
    }
}

ReactDOM.render(<Game />, document.getElementById('root'));
