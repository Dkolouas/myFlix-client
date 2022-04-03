import React, { useState } from 'react';
import { Form, Button, Card, CardGroup, Container, Col, Row } from 'react-bootstrap';
import axios from 'axios';


//login stylesheet
import './login-view.scss';
import { Card } from 'react-bootstrap';

export function LoginView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
        /* Send a request to the server for authentication */
        /* then call props.onLoggedIn(username) */
        props.onLoggedIn(username);
    };

    return (
        <Container>
            <Row>
                <Col></Col>
                <Col>
                    <Card style={{ marginTop: 100, marginBottom: 50, width: '30rem' }}>
                        <Card.Body>
                            <Card.Title style={{ textAlign: 'center', fontSize: '2rem' }}>Login</Card.Title>
                            <Form className="login-border">
                                <Form.Group controlId="formGroupUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={username}
                                        onChange={e => setUsername(e.target.value)}
                                        required
                                        placeholder="Enter username" />
                                </Form.Group>

                                <Form.Group controlId="formGroupPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        required
                                        placeholder="Enter password"
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit" onClick={handleSubmit} style={{ marginTop: '1rem' }}>
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col></Col>
            </Row>
        </Container>

    );
}