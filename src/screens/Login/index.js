import React, { Component } from 'react';
import Content from './components/Content';
import LayoutDefault from '../../components/LayoutDefault';

class Login extends Component {

    render() {
        return (
            <LayoutDefault>
                <Content {...this.props} />
            </LayoutDefault>
        );
    }
}

export default Login;