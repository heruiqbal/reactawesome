import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }

    onChangeEmail(event) {
        this.props.onChangeEmail(event);
    }

    onChangePassword(e) {
        this.props.onChangePassword(e);
    }

    onChangeCheckbox(e) {
        this.props.onChangeCheckbox(e);
    }

    submitLogin(e) {
        this.props.submitLogin(e);
    }

    render() {
        return (
            <div className='content-login-form'>
                <Form onSubmit={(e) => this.submitLogin(e)}>
                    <Form.Group controlId='formEmailLogin'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type='email' placeholder='Enter email' value={this.props.email} onChange={(event) => { this.onChangeEmail(event) }} />
                        <Form.Text className='text-muted'>
                            We'll never share your email with anyone else.
                                </Form.Text>
                    </Form.Group>

                    <Form.Group controlId='formPasswordLogin'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type={this.props.isShow ? 'text' : 'password'} placeholder='Password' value={this.props.password} onChange={(event) => { this.onChangePassword(event) }} />
                    </Form.Group>
                    <Form.Group controlId='formCheckboxLogin'>
                        <Form.Check type='checkbox' label='Check me out' onChange={(event) => { this.onChangeCheckbox(event) }} />
                    </Form.Group>
                    <Button variant='primary' type='submit'>
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default LoginComponent;