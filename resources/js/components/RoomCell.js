import React from 'react';
import ListGroupItem from "react-bootstrap/ListGroupItem";

export default function RoomCell(props) {
    return (
        <ListGroupItem key={props.roomId} onClick={() => props.handleClickRoom(props.roomId)}>
            {props.roomName}
        </ListGroupItem>
    );
}
