import React, { Component } from 'react';
// import { Form, Button } from 'react-bootstrap';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import './styles.css';
import { connect } from 'react-redux';
import actions from '../../../../actions';

class Konten extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: {
                email: '',
                password: '',
                isShow: false
            },
            register: {
                fullName: '',
                email: '',
                password: '',
                isShow: false
            }
        };
        this.onChangeFullName = this.onChangeFullName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
        this.submitRegister = this.submitRegister.bind(this);
    }

    onChangeFullName(event) {
        let newState = JSON.parse(JSON.stringify(this.state));

        newState.register.fullName = event.target.value;
        this.setState(newState);
    }

    onChangeEmail(event) {
        let newState = JSON.parse(JSON.stringify(this.state));

        if(event.target.id === 'formEmailLogin') {
            newState.login.email = event.target.value;
            this.setState(newState);
        } else if (event.target.id === 'formEmailRegister') {
            newState.register.email = event.target.value;
            this.setState(newState);
        }
    }

    onChangePassword(event) {
        let newState = JSON.parse(JSON.stringify(this.state));

        if(event.target.id === 'formPasswordLogin') {
            newState.login.password = event.target.value;
            this.setState(newState);
        } else if (event.target.id === 'formPasswordRegister') {
            newState.register.password = event.target.value;
            this.setState(newState);
        }
    }

    onChangeCheckbox(event) {
        let newState = JSON.parse(JSON.stringify(this.state));

        if(event.target.id === 'formCheckboxLogin') {
            newState.login.isShow = !newState.login.isShow;
            this.setState(newState);
        } else if (event.target.id === 'formCheckboxRegister') {
            newState.register.isShow = !newState.login.isShow;
            this.setState(newState);
        }
    }

    submitLogin(e) {
        e.preventDefault();
        console.log(this.props);
        const payload = {
            email: this.state.login.email,
            password: this.state.login.password
        };

        this.props.loginDispatch(payload);

        // alert(JSON.stringify(this.state.login));
    }

    submitRegister(e) {
        e.preventDefault();

        const payload = {
            body: {
                fullName: this.state.register.fullName,
                email: this.state.register.email,
                password: this.state.register.password
            }
        };

        this.props.registerDispatch(payload,
            (res)=> {
                this.props.history.push('/');
                console.log(res)
            },
            (err)=> {
                console.log(err)
            })
    }

    render() {
        return (
            <div className='container-content-login'>
                <div className='content-login-left'>
                    <div className='content-login-title'>
                        <h1>Login</h1>
                    </div>
                    <LoginComponent
                        email={this.state.login.email}
                        password={this.state.login.password}
                        isShow={this.state.login.isShow}
                        onChangeEmail={this.onChangeEmail}
                        onChangePassword={this.onChangePassword}
                        onChangeCheckbox={this.onChangeCheckbox}
                        submitLogin={this.submitLogin}
                    />
                </div>
                <div className='content-login-right'>
                    <div className='content-login-title'>
                        <h1>Register</h1>
                    </div>
                    <RegisterComponent
                        fullName={this.state.register.fullName}
                        email={this.state.register.email}
                        password={this.state.register.password}
                        isShow={this.state.register.isShow}
                        onChangeFullName={this.onChangeFullName}
                        onChangeEmail={this.onChangeEmail}
                        onChangePassword={this.onChangePassword}
                        onChangeCheckbox={this.onChangeCheckbox}
                        submitRegister={this.submitRegister}
                    />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    loginDispatch: (req,res,err) => dispatch(actions.user.api.loginUser(req,res,err)),
    registerDispatch: (req,res,err) => dispatch(actions.user.api.registerUser(req,res,err))
})

export default connect(null, mapDispatchToProps)(Konten);