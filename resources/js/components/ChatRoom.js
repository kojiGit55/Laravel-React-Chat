import React, { Component } from 'react';
import axios from 'axios';
import SendMessage from './SendMessage';

export default class ChatRoom extends Component {
    constructor() {
        super();
        this.state = {
            messages: [],
            publicMessage: ''
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
            <div className="container">
                <header>
                    <button onClick={() => this.props.setPage('list')}>back</button>
                </header>
                <div>{this.state.publicMessage}</div>
                {
                    this.state.messages
                        .filter(message => message.room_id === this.props.roomId)
                        .map(message => {
                        return (
                            <div key={message.id} className={["aaa", message.user_id === this.props.userId ? "myMessage" : "othersMessage"].join(" ")}>
                                <p className="message">{message.text}</p>
                            </div>
                        );
                    })
                }
                <SendMessage
                    sendMessage={this.sendMessage}
                    userId={this.props.userId}
                    roomId={this.props.roomId}
                />
            </div>
        );
    }
}
