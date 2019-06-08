import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios/index';
import RoomList from '../components/RoomList';
import ChatRoom from "../components/ChatRoom";
import Login from '../components/Login';
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";

export default function Top() {
    const [page, setPage] = useState('list');
    const [roomId, setRoomId] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState(0);

    return (
        <Router>
            <div>
                <Route
                    path="/login/"
                    render={ props =>
                        <Login
                            setIsLoggedIn={setIsLoggedIn}
                            setPage={setPage}
                            setUserId={setUserId}
                        />
                    }
                />
                <Route
                    path="/rooms/"
                    render={ props =>
                        <RoomList
                            setPage={setPage}
                            setRoomId={setRoomId}
                            userId={userId}
                            {...props}
                        />
                    }
                />
                <Route
                    path="/room/"
                    render={ props =>
                        <ChatRoom
                            roomId={roomId}
                            setPage={setPage}
                            userId={userId}
                            {...props}
                        />
                    }
                />
            </div>
            {
                isLoggedIn === false ?
                    <Redirect
                        to={{
                            pathname: "/login/",
                        }}
                    />
                    :
                    page === 'list' ?
                        <Redirect
                            to={{
                                pathname: "/rooms/",
                            }}
                        />
                        :
                        <Redirect
                            to={{
                                pathname: "/room/",
                            }}
                        />
            }

        </Router>
    );
}

if (document.getElementById('example')) {
    ReactDOM.render(<Top />, document.getElementById('example'));
}
