import React from 'react';
import { mount, configure } from 'enzyme';
import { FormProvider } from '../../context/form-context';
import SubForm from '../../components/form/subform';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });



describe('Form renders', () => {
    it('Form renders default input fields', () => {
       /*  const wrapper = mount(
        <FormProvider>
            <SubForm />
        </FormProvider>
        );

        let holidayAllowance = wrapper.find('input#holiday-allowance-input');
        console.log(holidayAllowance.debug()); */
        
    })
})