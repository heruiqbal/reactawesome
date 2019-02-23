import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bahasa: 'indonesia'
        };
    }

    render() {
        return (
            <div>
                <Header bahasa={this.state.bahasa} />
                <Footer />
            </div>
        );
    }
}

export default Home;