import React from 'react';
import { configure, shallow } from "enzyme";

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import RoomList from './RoomList';
import { Row, Col, Container} from "react-bootstrap";

describe('<RoomList>', () => {
    const props = {
        chatList: [
            {id: 1, name: 'aaa'},
            {id: 2, name: 'bbb'},
            {id: 3, name: 'ccc'},
        ],
        handleClickRoom: jest.fn(),
        handleClickB: jest.fn()
    };

    it('renders a Container component', () => {
        const wrapper = shallow(<RoomList {...props} />);
        expect(wrapper.find(Container)).toHaveLength(1);
    });

    it('simulates a click event', () => {
        const wrapper = shallow(<RoomList {...props} />);
        wrapper.find('Button').simulate('click');
        expect(props.handleClickB).toHaveBeenCalled();
    });
});
