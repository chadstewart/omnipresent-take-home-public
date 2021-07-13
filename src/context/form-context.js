import React, { useState, createContext } from 'react';

const FormContext = createContext();

function FormProvider(props) {

    const [firstName, setFirstName] = useState('');
    const [errorFirstName, setErrorFirstName] = useState('');

    const [lastName, setLastName] = useState('');
    const [errorLastName, setErrorLastName] = useState('');

    const [dateOfBirth, setDateOfBirth] = useState('');
    const [errorDateOfBirth, setErrorDateOfBirth] = useState('');

    const [country, setCountry] = useState('Jamaica');

    const [maritalStatus, setMaritalStatus] = useState('');
    const [errorMaritalStatus, setErrorMaritalStatus] = useState('');

    const [socialInsuranceNumber, setSocialInsuranceNumber] = useState('');
    const [errorSocialInsuranceNumber, setErrorSocialInsuranceNumber] = useState('');

    const [numOfChildren, setNumOfChildren] = useState(0);
    const [errorNumOfChildren, setErrorNumOfChildren] = useState('');

    const [workingHours, setWorkingHours] = useState(0);
    const [errorWorkingHours, setErrorWorkingHours] = useState('');

    const [holidayAllowance, setHolidayAllowance] = useState(0);
    const [errorHolidayAllowance, setErrorHolidayAllowance] = useState('');
    
    const [submitError, setErrorSubmit] = useState('');

    const [isError, setIsError] = useState(false);

    const state = {
        firstName,
        errorFirstName,

        lastName,
        errorLastName,
        
        dateOfBirth,
        errorDateOfBirth,
        
        country,
        
        maritalStatus,
        errorMaritalStatus,
        
        socialInsuranceNumber,
        errorSocialInsuranceNumber,
        
        numOfChildren,
        errorNumOfChildren,
        
        workingHours,
        errorWorkingHours,
        
        holidayAllowance,
        errorHolidayAllowance,

        submitError,

        isError,



        setFirstName,
        setErrorFirstName,

        setLastName,
        setErrorLastName,

        setDateOfBirth,
        setErrorDateOfBirth,

        setCountry,
        
        setMaritalStatus,
        setErrorMaritalStatus,
        
        setSocialInsuranceNumber,
        setErrorSocialInsuranceNumber,
        
        setNumOfChildren,
        setErrorNumOfChildren,
        
        setWorkingHours,
        setErrorWorkingHours,
        
        setHolidayAllowance,
        setErrorHolidayAllowance,

        setErrorSubmit,

        setIsError,
    }

    return (
        <FormContext.Provider value={state}>
            {props.children}
        </FormContext.Provider>
    );
}

export { FormContext, FormProvider };