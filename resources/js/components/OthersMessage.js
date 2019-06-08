import React, { Component } from 'react';

export default function OthersMessage({userId, text}) {
    return (
        <div className="others-message-container">
            <div className="others-icon">
                <img src="/images/icon1.png" />
            </div>
            <div className="others-message">
                <div className="others-text">
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
}
