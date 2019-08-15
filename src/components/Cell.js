import React from 'react';

export default class Cell extends React.Component {

    getValue(){
        if (this.props.value.isMine) {
            return "X";
        }
        if(this.props.value.neighbour === 0 ){
            return null;
        }
        return this.props.value.neighbour;
    }

    render(){
        let className = "cell" + (this.props.value.isMine ? " is-mine" : "")
        return (
            <div ref="cell"  className={className} >
                {this.getValue()}
            </div>
        );
    }
}
