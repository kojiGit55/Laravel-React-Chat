import React, { Component } from 'react';
import axios from 'axios';
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { withRouter } from "react-router-dom";

class RoomList extends Component {
    constructor() {
        super();
        this.state = {
            chatList: []
        }
    }

    componentDidMount() {
        axios.get('/api/rooms').then(res => {
            console.log(res.data);
            this.setState({
                chatList: res.data
            });
        }).catch(err => {

        })
    }

    handleClickRoom(roomId) {
        this.props.history.push(`/rooms/${roomId}`)
    }

    render() {
        return (
            <div className="room-list w-50">
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

export default withRouter(RoomList)
