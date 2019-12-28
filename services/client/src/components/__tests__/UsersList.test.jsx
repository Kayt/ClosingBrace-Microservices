import React from 'react';
import { shallow } from 'enzyme';

import UsersList from '../UsersList';

const users = [
    {
        'active': true,
        'email': 'achim@closinbrace',
        'id': 1,
        'username': 'achim'
    },
    {
        'active': true,
        'email': 'test@test.com',
        'id': 2,
        'username': 'achimtest'
    }
];

test('UsersList renders properly', ()=> {
    const wrapper = shallow(<UsersList users={users}/>);
    const element = wrapper.find('h4');
    expect(element.length).toBe(2);
    expect(element.get(0).props.children).toBe('achim');
});