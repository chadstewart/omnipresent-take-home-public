import React, { useContext, useEffect } from 'react';
import { Grid, TextField } from '@material-ui/core';
import { FormContext } from '../../context/form-context';
import { TEXT_CHARACTER_LIMIT,
         NUM_CHARACTER_LIMIT,
         HOLIDAY_ALLOWANCE_CHARACTER_LIMIT,
         textRegex, 
         numberRegex,
         formValidation} from '../../utils/inputValidation';

function SubForm() {

    const {        
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

        country,

        setIsError,
    } = useContext(FormContext);

    const formState = useContext(FormContext);

    const formConfig = {
        Spain: {
            formLayout:
                <>
                    <Grid item>
                        <TextField
                        name = 'maritalStatus'
                        id='marital-status-input'
                        error = {errorMaritalStatus !== ''}
                        helperText = {errorMaritalStatus}
                        value = {maritalStatus}
                        label = 'Marital Status'
                        variant='outlined'
                        inputProps = {{
                        maxlength: TEXT_CHARACTER_LIMIT
                        }}
                        onChange={event => handleChange(event, setMaritalStatus)}
                        onBlur={event => formValidation(maritalStatus,
                                                        setErrorMaritalStatus,
                                                        event.target.name,
                                                        textRegex,
                                                        errorMessages)}/>
                    </Grid>

                    <Grid item>
                        <TextField
                        name = 'socialInsuranceNumber'
                        id='social-insurance-number-input'
                        error = {errorSocialInsuranceNumber !== ''}
                        helperText = {errorSocialInsuranceNumber}
                        value = {socialInsuranceNumber}
                        label = 'Social Insurance Number'
                        variant='outlined'
                        inputProps = {{
                        maxlength: NUM_CHARACTER_LIMIT
                        }}
                        onChange={event => handleChange(event, setSocialInsuranceNumber)}
                        onBlur={event => formValidation(socialInsuranceNumber,
                                                        setErrorSocialInsuranceNumber,
                                                        event.target.name,
                                                        numberRegex,
                                                        errorMessages)}/>
                    </Grid>
                </>
            },
        Ghana: {
            minHolidayAllowance: 30,
            formLayout:
                <>
                    <Grid item>
                        <TextField
                        name = 'maritalStatus'
                        id='marital-status-input'
                        error = {errorMaritalStatus !== ''}
                        helperText = {errorMaritalStatus}
                        value = {maritalStatus}
                        label = 'Marital Status'
                        variant = 'outlined'
                        inputProps = {{
                        maxlength: NUM_CHARACTER_LIMIT
                        }}
                        onChange={event => handleChange(event, setMaritalStatus)}
                        onBlur={event => formValidation(maritalStatus,
                                                        setErrorMaritalStatus,
                                                        event.target.name,
                                                        textRegex,
                                                        setIsError,
                                                        formState,
                                                        errorMessages)}/>
                    </Grid>

                    <Grid item>
                        <TextField
                        name = 'numOfChildren'
                        id='number-of-children-input'
                        error = {errorNumOfChildren !== ''}
                        helperText = {errorNumOfChildren}
                        value = {numOfChildren}
                        label = 'Number of Children'
                        variant = 'outlined'
                        inputProps = {{
                        maxlength: NUM_CHARACTER_LIMIT
                        }}
                        onChange={event => handleChange(event, setNumOfChildren)}
                        onBlur={event => formValidation(numOfChildren,
                                                        setErrorNumOfChildren,
                                                        event.target.name,
                                                        numberRegex,
                                                        setIsError,
                                                        formState,
                                                        errorMessages)}/>
                    </Grid>
                </>
            },
        Brazil: {
            minHolidayAllowance: 40,
            formLayout:
            <>
                <Grid item>
                    <TextField
                    name = 'workingHours'
                    id='working-hours-input'
                    error = {errorWorkingHours !== ''}
                    helperText = {errorWorkingHours}
                    value={workingHours}
                    label='Working Hours'
                    variant = 'outlined'
                    inputProps = {{
                      maxlength: NUM_CHARACTER_LIMIT
                    }}
                    onChange={event => handleChange(event, setWorkingHours)}
                    onBlur={event => formValidation(workingHours,
                                                    setErrorWorkingHours,
                                                    event.target.name,
                                                    numberRegex,
                                                    setIsError,
                                                    formState,
                                                    errorMessages)}/>
                </Grid>
            </>
        }
    };
    
    const errorMessages = {
        maritalStatus: 'Only add text',
        socialInsuranceNumber: 'Only add numbers',        
        numOfChildren: 'Only add numbers',
        workingHours: 'Only add numbers',
        holidayAllowance: 'Only add numbers'     
     };

    useEffect(() => {
        setMaritalStatus('');
        setSocialInsuranceNumber(0);
        setNumOfChildren(0);
        setWorkingHours(0);
        setHolidayAllowance(0);
        setErrorMaritalStatus('');
        setErrorSocialInsuranceNumber('');
        setErrorNumOfChildren('');
        setErrorWorkingHours('');
        setErrorHolidayAllowance('');
    }, [country]);

    const handleChange = (event, stateFunction) => {
        stateFunction(event.target.value);
    };

  return (
    <Grid container 
    direction='column'
    spacing='2'
    xs={12}>
      { country in formConfig && formConfig[country].formLayout }
      <>
          <Grid item>
              <TextField
              name = "holidayAllowance"
              id='holiday-allowance-input'
              error = {errorHolidayAllowance !== ''}
              helperText = {errorHolidayAllowance}
              value = {holidayAllowance}
              label = 'Holiday Allowance'
              variant = 'outlined'
              inputProps = {{
                maxlength: HOLIDAY_ALLOWANCE_CHARACTER_LIMIT
              }}
              onChange = {event => handleChange(event, setHolidayAllowance)}
              onBlur = {event => {
                  let holidayAllowanceValue = 0;
                  if(country in formConfig &&
                     'minHolidayAllowance' in formConfig[country]) holidayAllowanceValue = formConfig[country]['minHolidayAllowance'];
                  formValidation(holidayAllowance,
                                 setErrorHolidayAllowance,
                                 event.target.name,
                                 numberRegex,
                                 setIsError,
                                 formState,
                                 errorMessages,
                                 holidayAllowanceValue)
              }}/>
          </Grid>
      </>
    </Grid>
  );
}

export default SubForm;