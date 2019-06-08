import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import RoomList from '../components/RoomList';
import ChatRoom from "../components/ChatRoom";
import Login from '../components/Login';
import Auth from './Auth';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

export default function AppRouter() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState(0);

    return (
        <Router>
            <Switch>
                <Route
                    path="/login/"
                    render={ props =>
                        <Login
                            isLoggedIn={isLoggedIn}
                            setIsLoggedIn={setIsLoggedIn}
                            setUserId={setUserId}
                        />
                    }
                />
                <Auth isLoggedIn={isLoggedIn}>
                    <Route
                        exact
                        path="/rooms/"
                        render={ props =>
                            <RoomList
                                userId={userId}
                                {...props}
                            />
                        }
                    />
                    <Route
                        path="/rooms/:id"
                        render={ props =>
                            <ChatRoom
                                userId={userId}
                                {...props}
                            />
                        }
                    />
                    <Route
                        render={ () =>
                            <Redirect to={{
                                pathname: "/rooms/"
                            }} />
                        }
                    />
                </Auth>
            </Switch>
        </Router>
    );
}

if (document.getElementById('example')) {
    ReactDOM.render(<AppRouter />, document.getElementById('example'));
}