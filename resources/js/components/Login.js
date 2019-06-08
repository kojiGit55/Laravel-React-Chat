import React, { useState, useCallback } from 'react';
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";

export default function SendMessage(props) {
    const [userName, setUserName] = useState('testa@example.com');
    const [password, setPassword] = useState('testtest');

    const onClick = useCallback(() => {
        axios.post('/oauth/token', {
            grant_type: 'password',
            client_id: 2,
            client_secret: process.env.MIX_CLIENT_SECRET,
            username: userName,
            password: password,
            scope: ''
        }).then(res => {
            axios.get('/api/user', {
                headers: {
                    Authorization: `Bearer ${res.data.access_token}`
                }
            }).then(userRes => {
                props.setIsLoggedIn(true);
                // props.setPage('list');
                props.setUserId(userRes.data.id);
            })
        }).catch(err => {

        });
    }, [userName, password]);

    if (props.isLoggedIn) return <Redirect to={{ pathname: "/rooms/" }} />;

    return (
        <Container>
            <Row className="my-5">
                <Col md={3}></Col>
                <Col md={6}>
                    <div className="text-center">
                        <Form>
                            <Form.Label>ID</Form.Label>
                            <Form.Control type="text" value={userName} onChange={e => setUserName(e.target.value)}></Form.Control>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)}></Form.Control>
                        </Form>
                        <Row className="my-3">
                            <Col>
                                <Button onClick={onClick}>LOGIN</Button>
                            </Col>
                        </Row>
                        <div >
                            <p>テストユーザでログイン可能です。</p>
                            <p>・A</p>
                            <p>testa@example.com</p>
                            <p>testtest</p>
                            <p>・B</p>
                            <p>testb@example.com</p>
                            <p>testtest</p>
                        </div>
                    </div>
                </Col>
                <Col md={3}></Col>
            </Row>
        </Container>
    );
}
