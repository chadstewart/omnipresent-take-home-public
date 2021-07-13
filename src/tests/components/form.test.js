import React from 'react';
import { mount, configure } from 'enzyme';
import { FormProvider } from '../../context/form-context';
import Form from '../../components/form';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });



describe('Form renders', () => {
    it('Form renders default input fields', () => {
        const wrapper = mount(
        <FormProvider>
            <Form />
        </FormProvider>
        );
        
        const firstName = wrapper.find('input#first-name-input');
        expect(firstName.props().name).toBe('firstName');

        const lastName = wrapper.find('input#last-name-input');
        expect(lastName.props().name).toBe('lastName');

        const dateOfBirth = wrapper.find('input#date-of-birth-input');
        expect(dateOfBirth.props().name).toBe('dateOfBirth');

        const country = wrapper.find('input#country-input');
        expect(country.props().name).toBe('country');

        const holidayAllowance = wrapper.find('input#holiday-allowance-input');
        expect(holidayAllowance.props().name).toBe('holidayAllowance');

        const submitButton = wrapper.find('button#submit-button');
        expect(submitButton.text()).toBe('Submit');
    });

});

describe('Form functionality', () => {
    it('Add a value to firstName', () => {
        const wrapper = mount(
        <FormProvider>
            <Form />
        </FormProvider>
        );
        
        let firstName = wrapper.find('input#first-name-input');
        firstName.simulate('change', {target: {value: 'Chad'}});
        firstName = wrapper.find('input#first-name-input');
        expect(firstName.props().value).toBe('Chad');
    });
    
    it('Add a value to lastName', () => {
        const wrapper = mount(
        <FormProvider>
            <Form />
        </FormProvider>
        );
        
        let lastName = wrapper.find('input#last-name-input');
        lastName.simulate('change', {target: {value: 'Chad'}});
        lastName = wrapper.find('input#last-name-input');
        expect(lastName.props().value).toBe('Chad');
        
    });

    it('Add a value to dateOfBirth', () => {
        const wrapper = mount(
        <FormProvider>
            <Form />
        </FormProvider>
        );
        
        let dateOfBirth = wrapper.find('input#date-of-birth-input');
        dateOfBirth.simulate('change', {target: {value: '01/01/2020'}});
        dateOfBirth = wrapper.find('input#date-of-birth-input');
        expect(dateOfBirth.props().value).toBe('01/01/2020');
    });

    it('Add a value to holidayAllowance', () => {
        const wrapper = mount(
        <FormProvider>
            <Form />
        </FormProvider>
        );

        let holidayAllowance = wrapper.find('input#holiday-allowance-input');
        holidayAllowance.simulate('change', {target: {value: '5'}});
        holidayAllowance = wrapper.find('input#holiday-allowance-input');
        expect(holidayAllowance.props().value).toBe('5');
        
    });
});

describe('Form Validation', () => {
    it('Add a value to firstName that is not accepted', () => {
        const wrapper = mount(
        <FormProvider>
            <Form />
        </FormProvider>
        );

        let firstNameError = wrapper.find('input#first-name-input');
        firstNameError.simulate('change', {target: {value: '@'}});
        firstNameError = wrapper.find('input#first-name-input');
        expect(firstNameError.props()['aria-invalid']).toBe(false);
        
    })

    it('Add a value to lastName that is not accepted', () => {
        const wrapper = mount(
        <FormProvider>
            <Form />
        </FormProvider>
        );

        let lastNameError = wrapper.find('input#last-name-input');
        lastNameError.simulate('change', {target: {value: '@'}});
        lastNameError = wrapper.find('input#last-name-input');
        expect(lastNameError.props()['aria-invalid']).toBe(false);
        
    })

    it('Add a value to dateOfBirth that is not accepted', () => {
        const wrapper = mount(
        <FormProvider>
            <Form />
        </FormProvider>
        );

        let dateOfBirthError = wrapper.find('input#date-of-birth-input');
        dateOfBirthError.simulate('change', {target: {value: '@'}});
        dateOfBirthError = wrapper.find('input#date-of-birth-input');
        expect(dateOfBirthError.props()['aria-invalid']).toBe(false);
        
    })

    it('Add a value to holidayAllowance that is not accepted', () => {
        const wrapper = mount(
        <FormProvider>
            <Form />
        </FormProvider>
        );

        let holidayAllownaceError = wrapper.find('input#holiday-allowance-input');
        holidayAllownaceError.simulate('change', {target: {value: '@'}});
        holidayAllownaceError = wrapper.find('input#holiday-allowance-input');
        expect(holidayAllownaceError.props()['aria-invalid']).toBe(false);
        
    })

    /* it('Try to submit form without completing it', () => {
        const wrapper = mount(
        <FormProvider>
            <Form />
        </FormProvider>
        );
        
        let formError = wrapper.find('form');
        formError.simulate('submit', {target: {value: '0', value: '0'}});
        formError = wrapper.find('#submitError');    
    }) */
});