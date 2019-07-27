import React, { Component } from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { Row, Col, Container} from "react-bootstrap";
import RoomCell from "./RoomCell";

export default function RoomList(props) {
    return (
        <div className="room-list w-50">
            <Container>
                <Row>
                    <Col>
                        <div>チャット一覧</div>
                    </Col>
                    <Col xs={4}></Col>
                    <Col>
                        <Button onClick={props.handleClickB}>友達一覧へ</Button>
                    </Col>
                </Row>
                <ListGroup>
                    {
                        props.chatList.map(room => {
                            return (
                                <RoomCell
                                    key={room.id}
                                    roomId={room.id}
                                    roomName={room.name}
                                    hadleClickRoom={props.handleClickRoom}
                                />
                            );
                        })
                    }
                </ListGroup>
            </Container>
        </div>
    );
}
