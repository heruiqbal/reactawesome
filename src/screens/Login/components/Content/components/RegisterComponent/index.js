import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class PastEvent extends Component {
    constructor(props) {
        super(props);
        this.onChangeFullName = this.onChangeFullName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
        this.submitRegister = this.submitRegister.bind(this);
    }

    onChangeFullName(event) {
        this.props.onChangeFullName(event);
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

    submitRegister(e) {
        this.props.submitRegister(e);
    }

    render() {
        return (
            <div className='content-login-form'>
                <Form onSubmit={(e) => this.submitRegister(e)}>
                    <Form.Group controlId='formNameRegister'>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type='text' placeholder='Enter full name' value={this.props.fullName} onChange={(event) => { this.onChangeFullName(event) }} />
                    </Form.Group>
                    <Form.Group controlId='formEmailRegister'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type='email' placeholder='Enter email' value={this.props.email} onChange={(event) => { this.onChangeEmail(event) }} />
                        <Form.Text className='text-muted'>
                            We'll never share your email with anyone else.
                                </Form.Text>
                    </Form.Group>

                    <Form.Group controlId='formPasswordRegister'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type={this.props.isShow ? 'text' : 'password'} placeholder='Password' value={this.props.password} onChange={(event) => { this.onChangePassword(event) }} />
                    </Form.Group>
                    <Form.Group controlId='formBasicChecbox'>
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

export default PastEvent;