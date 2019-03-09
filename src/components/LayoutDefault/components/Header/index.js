import React, { Component } from 'react';
import './styles.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import images from '../../../../assets';
import { connect } from 'react-redux';

class Header extends Component {
    
    render() {        
        return (
            <Navbar bg='light' expand='lg'>
                <Navbar.Brand className=''><img src={images.hacktiv8} alt='logo-hacktiv8' className='logo-hacktiv8-header' /></Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='mr-auto'>
                        <div className='header-button-link'><Link to='/'>Create Meetup</Link></div>
                        <div className='header-button-link'><Link to='/about'>Explore</Link></div>
                    </Nav>
                    <Nav>
                        { this.props.user.isLogin ? (
                            <div className='header-button-link'>Log Out</div>
                        ) : (
                            <div className='header-button-link'><Link to='/login'>Login</Link></div>
                        ) }
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps,null)(Header);