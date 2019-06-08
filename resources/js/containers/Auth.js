import React from 'react'
import { Redirect } from 'react-router-dom'

const Auth = (props) => (
    props.isLoading ?
        <div>loading...</div> :
        props.isLoggedIn ?
            props.children :
            <Redirect to={'/login/'}/>
);

export default Auth
