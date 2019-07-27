import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import apiClient from "../utils/apiClient";
import { connect } from 'react-redux'
import RoomList from '../components/RoomList';

class RoomListContainer extends Component {
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
            <RoomList
                chatList={this.state.chatList}
                handleClickRoom={this.handleClickRoom}
                handleClickB={this.handleClickB}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    userId: state.userId
});

export default connect(mapStateToProps)(withRouter(RoomListContainer));
