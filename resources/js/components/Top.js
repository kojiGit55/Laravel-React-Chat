import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import RoomList from './RoomList';
import ChatRoom from "./ChatRoom";
import Login from './Login';

export default function Top() {
    const [page, setPage] = useState('list');
    const [roomId, setRoomId] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState(0);

    return (
        <div>
            {
                isLoggedIn === false ?
                    <Login
                        setIsLoggedIn={setIsLoggedIn}
                        setPage={setPage}
                        setUserId={setUserId}
                    />
                    :
                    page === 'list' ?
                        <RoomList
                            setPage={setPage}
                            setRoomId={setRoomId}
                            userId={userId}
                        />
                        :
                        <ChatRoom
                            roomId={roomId}
                            setPage={setPage}
                            userId={userId}
                        />
            }

        </div>
    );
}

if (document.getElementById('example')) {
    ReactDOM.render(<Top />, document.getElementById('example'));
}
