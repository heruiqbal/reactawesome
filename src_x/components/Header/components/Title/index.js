import React, { Component } from 'react'

class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {
        return (
            <div>
                <h2 className={this.props.bool ? 'red-text': null}>{ this.props.title }</h2>
            </div>
        );
    }
}

export default Title;