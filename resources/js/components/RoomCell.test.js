import React from 'react';
import { configure, shallow } from "enzyme";

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import RoomCell from './RoomCell';
import ListGroupItem from "react-bootstrap/ListGroupItem";

describe('<RoomCell>', () => {
    const handleClickRoomMock = jest.fn();
    const props = {
        roomId: 3,
        roomName: 'roomC',
        handleClickRoom: jest.fn()
    };

    it('renders a ListGroupItem component', () => {
        const wrapper = shallow(<RoomCell {...props} />);
        expect(wrapper.find(ListGroupItem)).toHaveLength(1);
    });

    it('simulates a click event', () => {
        const wrapper = shallow(<RoomCell {...props} />);
        wrapper.find(ListGroupItem).simulate('click');
        expect(props.handleClickRoom).toHaveBeenCalled();
    });
});
