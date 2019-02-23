import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './components/Title';
import './styles.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'INDO',
            bool: false,
            input: '',
        };
        this.getBahasa = this.getBahasa.bind(this);
        this.saveInput = this.saveInput.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
    }

    getBahasa() {
        console.log('before', this.state.bool);
        this.setState({
            bool: !this.state.bool,
            title: this.props.bahasa
        }, () => {
            console.log('after', this.state.bool);
        })
    }

    saveInput(event) {    
        this.setState({
            input: event.target.value
        })
    }

    changeTitle() {
        this.setState({
            title: this.state.input,
            bool: true
        }, () => {
            console.log(this.state.title);
        });
    }


    render() {
        return (
            <div className='container-top '>
                <Title title={this.state.title} bool={this.state.bool} />
                <div>
                    <input placeholder='ganti judul' value={this.state.input} onChange={this.saveInput}/>
                    <input type='submit' onClick={this.changeTitle} />
                </div>
                <Title title={'Malaysia'} bool={this.state.bool} />
            </div>
        );
    }
}

Header.propTypes = {
    bahasa: PropTypes.string
}
export default Header;