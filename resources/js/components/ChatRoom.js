import React, { Component } from 'react';
import axios from 'axios';
import SendMessage from './SendMessage';
import MyMessage from "./MyMessage";
import OthersMessage from "./OthersMessage";
import NavBar from "react-bootstrap/NavBar";
import Button from "react-bootstrap/Button";

export default class ChatRoom extends Component {
    constructor() {
        super();
        this.state = {
            messages: [],
        };
    }

    componentDidMount() {
        window.Echo.channel('chatMessage')
            .listen('Posted', e => {
                axios.get('/api/messages').then(res => {
                    this.setState({
                        messages: res.data
                    });
                }).catch(err => {

                })
            });

        axios.get('/api/messages').then(res => {
            this.setState({
                messages: res.data
            });
        }).catch(err => {

        })
    }

    render() {
        return (
            <div className="chat-room w-50">
                <NavBar bg="light" expand="lg">
                    <Button variant="light" onClick={() => this.props.setPage('list')}>back</Button>
                    <NavBar.Brand>
                        Aさん
                    </NavBar.Brand>
                </NavBar>
                <div className="messages-container">
                {
                    this.state.messages
                        .filter(message => message.room_id === this.props.roomId)
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
                    roomId={this.props.roomId}
                />
            </div>
        );
    }
}
