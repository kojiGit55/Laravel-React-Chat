import React, { Component } from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { withRouter } from "react-router-dom";
import apiClient from "../utils/apiClient";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { connect } from 'react-redux'

class FriendList extends Component {
    constructor() {
        super();
        this.state = {
            friendList: [],
            selectedFriendId: 0
        };
        this.handleOpenDetail = this.handleOpenDetail.bind(this);
        this.handleCloseDetail = this.handleCloseDetail.bind(this);
        this.handleStartChat = this.handleStartChat.bind(this);
        this.handleClickButton = this.handleClickButton.bind(this);
    }

    componentDidMount() {
        apiClient.get('/api/friends').then(res => {
            this.setState({
                friendList: res.data
            });
        }).catch(err => {

        });
    }

    handleOpenDetail(friendId) {
        this.setState({ showDetail: true });
        this.setState({ selectedFriendId: friendId }); //history.pushにしたい
    }

    handleCloseDetail() {
        this.setState({ showDetail: false });
    }

    handleStartChat(friendId) {
        apiClient.get(`/api/friends/${friendId}/room`).then(res => {
            console.log(res.data.room_id);
            if (res.data.room_id > 0) {
                this.props.history.push(`/rooms/${res.data.room_id}`);
            } else {
                apiClient.post('/api/rooms', {name: 'private chat'}).then(r => {
                    apiClient.post(`/api/rooms/${r.data.id}/users`, { user_ids: [friendId, this.props.userId]})
                })
            }
        }).finally(() => {
            this.setState({showDetail: false});
        });
    }

    handleClickButton() {
        this.props.history.push(`/rooms/`);
    }

    handleAddFriend() {

    }

    render() {
        return (
            <div className="room-list w-50">
                {/*<NavBar bg="light" expand="lg">*/}
                {/*    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>*/}
                {/*</NavBar>*/}
                <div>友だち一覧</div>
                <Button onClick={this.handleClickButton}>チャット一覧へ</Button>
                <Button onClick={this.handleAddFriend}>友達追加</Button>
                <ListGroup>
                    {
                        this.state.friendList.map(friend => {
                            return (
                                <ListGroupItem key={friend.id}>
                                    {friend.name}
                                    <Button variant="primary" className="ml-3" onClick={() => this.handleStartChat(friend.id)}>
                                        チャット画面へ
                                    </Button>
                                </ListGroupItem>
                            );
                        })
                    }
                </ListGroup>

                <Modal show={this.state.showDetail} onHide={this.handleCloseDetail}>
                    <Modal.Header closeButton>
                        <Modal.Title>aa</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.handleStartChat}>
                            チャット画面へ
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    userId: state.userId
});

export default connect(mapStateToProps)(withRouter(FriendList));
