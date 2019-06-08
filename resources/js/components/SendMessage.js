import React, { useState, useCallback } from 'react';
import axios from "axios";

export default function SendMessage(props) {
    const [text, setText] = useState('');

    const onClick = useCallback(() => {
        axios.post('/api/messages', {
            text: text,
            user_id: props.userId,
            room_id: props.roomId
        }).then(res => {

        }).catch(err => {

        });
        setText('');
    }, [text, props.roomId]);

    return (
        <div>
            <input type="text" className="textBox" value={text} onChange={e => setText(e.target.value)}></input>
            <button className="sendButton" onClick={onClick}>send</button>
        </div>
    );
}
