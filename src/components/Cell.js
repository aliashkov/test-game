import React from 'react';

export default class Cell extends React.Component {

    render(){
        let className = "cell"
        return (
            <div ref="cell"  className={className} >
            </div>
        );
    }
}
