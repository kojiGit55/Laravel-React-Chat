import React, { Component } from 'react';

export default function MyMessage({userId, text}) {
    return (
        <div className="my-message">
            <p>{text}</p>
        </div>
    );
}
