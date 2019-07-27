import React, { Component } from 'react';
import SendMessage from './SendMessage';
import MyMessage from "./MyMessage";
import OthersMessage from "./OthersMessage";
import NavBar from "react-bootstrap/NavBar";
import Button from "react-bootstrap/Button";
import apiClient from "../utils/apiClient";

export default class ChatRoom extends Component {
    constructor() {
        super();
        this.state = {
            messages: [],
            roomName: ""
        };
        this.handleClickBack = this.handleClickBack.bind(this);
    }

    componentDidMount() {
        window.Echo.channel('chatMessage')
            .listen('Posted', e => {
                apiClient.get('/api/messages').then(res => {
                    this.setState({
                        messages: res.data
                    });
                }).catch(err => {

                })
            });

        apiClient.get('/api/messages').then(res => {
            this.setState({
                messages: res.data
            });
        }).catch(err => {

        })

        apiClient.get(`/api/rooms/${this.props.match.params.id}`).then(res => {
            this.setState({
                roomName: res.data.name
            })
        })
    }

    handleClickBack() {
        history.back();
    }

    render() {
        return (
            <div className="chat-room w-50">
                <NavBar bg="light" expand="lg">
                    <Button variant="light" onClick={this.handleClickBack}>back</Button>
                    <NavBar.Brand>
                        {this.state.roomName}
                    </NavBar.Brand>
                </NavBar>
                <div className="messages-container">
                {
                    this.state.messages
                        .filter(message => message.room_id === parseInt(this.props.match.params.id))
                        .map(message => {
                            if (message.user_id === this.props.userId) {
                                return (<MyMessage key={message.id} text={message.text}/>);
                            } else {
                                return (<OthersMessage key={message.id} text={message.text}/>);
                            }
                        })
                }
                </div>
                <SendMessage
                    sendMessage={this.sendMessage}
                    userId={this.props.userId}
                    roomId={this.props.match.params.id}
                />
            </div>
        );
    }
}
