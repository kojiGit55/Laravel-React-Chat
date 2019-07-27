import React, { Component } from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { withRouter } from "react-router-dom";
import apiClient from "../utils/apiClient";
import Button from "react-bootstrap/Button";
import { connect } from 'react-redux'
import { Row, Col, Container} from "react-bootstrap";

class RoomList extends Component {
    constructor() {
        super();
        this.state = {
            chatList: []
        };
        this.handleClickRoom = this.handleClickRoom.bind(this);
        this.handleClickB = this.handleClickB.bind(this);
    }

    componentDidMount() {
        apiClient.get('/api/rooms').then(res => {
            console.log(res.data);
            this.setState({
                chatList: res.data
            });
        }).catch(err => {

        });
    }

    handleClickRoom(roomId) {
        this.props.history.push(`/rooms/${roomId}`)
    }

    handleClickB() {
        this.props.history.push(`/friends/`);
    }

    render() {

        return (
            <div className="room-list w-50">
                    {/*<NavBar bg="light" expand="lg">*/}
                    {/*    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>*/}
                    {/*</NavBar>*/}
                <Container>
                    <Row>
                        <Col>
                            <div>チャット一覧</div>
                        </Col>
                        <Col xs={4}></Col>
                        <Col>
                            <Button onClick={this.handleClickB}>友達一覧へ</Button>
                        </Col>
                    </Row>
                </Container>
                <ListGroup>
                    {
                        this.state.chatList.map(room => {
                            return (
                                <ListGroupItem key={room.id} onClick={() => this.handleClickRoom(room.id)}>
                                    {room.name}
                                </ListGroupItem>
                            );
                        })
                    }
                </ListGroup>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    userId: state.userId
});

export default connect(mapStateToProps)(withRouter(RoomList));
