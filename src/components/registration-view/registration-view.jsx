import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Card, CardGroup, Container, Col, Row } from 'react-bootstrap';
import axios from 'axios';

//registration stylesheet
import './registration-view.scss';


export function RegistrationView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://powerful-sea-93969.herokuapp.com/movies', {
            Username: username,
            Password: password,
            Email: email
        })
            .then(response => {
                const data = response.data;
                console.log(data);
                window.open('/', '_self');
            })
            .catch(e => {
                console.log('error registering the user');
                alert('something wasn\'t entered correctly');
                /* Send a request to the server for authentication */
                /* then call props.onLoggedIn(username) */
            });
    };

    return (
        <Container>
            <Row>
                <Col>
                    <CardGroup>
                        <Card>
                            <Card.Body>
                                <Card.Title>Please Register</Card.Title>
                                <Form>
                                    <Form.Group>
                                        <Form.label>Username</Form.label>
                                        <Form.control
                                            type="text"
                                            value={username}
                                            onChange={e => setUsername(e.target.value)}
                                            required
                                            placeholder="Enter username"
                                        />

                                        <Form.label>Password</Form.label>
                                        <Form.control
                                            type="password"
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                            required
                                            minLength="4"
                                            placeholder="Enter password must be 4 or more characters"
                                        />

                                        <Form.label>Email</Form.label>
                                        <Form.Control
                                            type="email"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            required
                                            placeholder="Enter email"
                                        />

                                        <Form.label>Birthday</Form.label>
                                        <Form.control
                                            type="date"
                                            value={birthday}
                                            onChange={e => setBirthday(e.target.value)}
                                            required
                                            placeholder="Enter birthday"
                                        />
                                    </Form.Group>
                                    <Button variant="primary" type="submit"
                                        onClick={handleSubmit}>
                                        Submit
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Col>
            </Row>
        </Container>
    );
}