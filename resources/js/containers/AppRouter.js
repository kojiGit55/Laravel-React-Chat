import React, { Component, useState, useEffect } from 'react';
import RoomListContainer from '../containers/RoomListContainer';
import ChatRoom from "../components/ChatRoom";
import FriendList from "../components/FriendList";
import Login from '../components/Login';
import Auth from './Auth';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import apiClient from "../utils/apiClient";

export default function AppRouter() {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState(0);

    useEffect(() => {
        apiClient.get('/api/user').then(userRes => {
            setIsLoggedIn(true);
            setUserId(userRes.data.id);
            setIsLoading(false);
        }).catch(err => {
            setIsLoading(false);
        })
    });

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
                <Auth isLoggedIn={isLoggedIn} isLoading={isLoading}>
                    <Route
                        exact
                        path="/rooms/"
                        render={ props =>
                            <RoomListContainer
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
                        path="/friends/"
                        render={ props =>
                            <FriendList
                                userId={userId}
                                {...props}
                            />
                        }
                    />
                    {/*<Route*/}
                    {/*    render={ () =>*/}
                    {/*        <Redirect to={{*/}
                    {/*            pathname: "/rooms/"*/}
                    {/*        }} />*/}
                    {/*    }*/}
                    {/*/>*/}
                </Auth>
            </Switch>
        </Router>
    );
}
