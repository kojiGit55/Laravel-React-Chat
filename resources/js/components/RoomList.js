import React, { Component } from 'react';
import axios from 'axios';
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

export default class RoomList extends Component {
    constructor() {
        super();
        this.state = {
            chatList: []
        }
    }

    componentDidMount() {
        axios.get('/api/rooms').then(res => {
            this.setState({
                chatList: res.data
            });
        }).catch(err => {

        })
    }

    handleClickRoom(roomId) {
        this.props.setRoomId(roomId);
        this.props.setPage('room')
    }

    render() {
        return (
            <ListGroup className="m-5">
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
        );
    }
}
