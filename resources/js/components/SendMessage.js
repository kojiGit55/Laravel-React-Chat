import React, { useState, useCallback } from 'react';
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function SendMessage(props) {
    const [text, setText] = useState('');

    const onClick = useCallback(() => {
        axios.post('/api/messages', {
            text: text,
            user_id: props.userId,
            room_id: props.roomId
        }).then(res => {

        }).catch(err => {

        });
        setText('');
    }, [text, props.roomId]);

    return (
        <Row>
            <Col md={10}>
                <Form>
                    <Form.Control type="text" className="textBox" value={text} onChange={e => setText(e.target.value)}></Form.Control>
                </Form>
            </Col>
            <Col md={2}>
                <Button className="sendButton" onClick={onClick}>send</Button>
            </Col>
        </Row>
    );
}
