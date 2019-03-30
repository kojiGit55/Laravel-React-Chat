import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Example extends Component {
    constructor() {
        super();
        this.state = {
            messages: []
        }
    }

    componentDidMount() {
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
                {
                    this.state.messages.map(message => {
                        return (
                            <div key={message.id} className={["aaa", message.user_id === 1 ? "myMessage" : "othersMessage"].join(" ")}>
                                <p className="message">{message.text}</p>
                            </div>
                        );
                    })
                }
                <input type="text" className="textBox"></input>
                <button className="sendButton">send</button>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
