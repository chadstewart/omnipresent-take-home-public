import React from 'react';
import { shallow, configure } from 'enzyme';
import App from '../App';
import Adapter from 'enzyme-adapter-react-16';
import { FormProvider } from '../context/form-context';
import Form from '../components/form';

configure({ adapter: new Adapter() });

describe('App', () => {
    it('Render Form with Context Provider', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.containsMatchingElement(
        <FormProvider>
            <Form />
        </FormProvider>)).toEqual(true);
    })
})