import React from 'react';
import App from '../src/App';
import { shallow } from 'enzyme';

describe('App', () => {
    it('Should pass', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toMatchSnapshot();
    });
});