import React, { useContext } from 'react';
import { Grid,
         TextField,
         Select,
         MenuItem,
         InputLabel,
         FormLabel,
         Button } from '@material-ui/core';
import SubForm from './subform';
import { FormContext } from '../../context/form-context';
import countries from '../../utils/countries';
import { TEXT_CHARACTER_LIMIT,
         DATE_CHARACTER_LIMIT,
         textNumRegex, 
         dateRegex,
         formValidation} from '../../utils/inputValidation';
import './index.css';

function Form() {

    const {
        firstName,
        errorFirstName,

        lastName,
        errorLastName,
        
        dateOfBirth,
        errorDateOfBirth,
        
        country,   
        
        
        setFirstName,
        setErrorFirstName,
        
        setLastName,
        setErrorLastName,
        
        setDateOfBirth,
        setErrorDateOfBirth,
        
        setCountry,

        submitError,
        setErrorSubmit,

        isError,
        setIsError,
     } = useContext(FormContext);

     const formState = useContext(FormContext);

     const errorMessages = {
        firstName: 'Only add text and numbers',
        lastName: 'Only add text and numbers',        
        dateOfBirth: 'Add a correct date',     
     };

    const handleChange = (event, stateFunction) => {
        stateFunction(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        if(isError) return setErrorSubmit('Please resolve all errors');
        setErrorSubmit('');
        
        let formData = event.target;
        let result = {};

        for(let item of formData) {
            if(item.type === 'text') {
                if(item.value === '' || item.value === '0') return setErrorSubmit('Please complete the form');
                result[item.name] = item.value;
            }
        }

        setErrorSubmit('');
        result = JSON.stringify(result);
        console.log(result);
    }

  return (
    <form onSubmit={handleSubmit}>
        <Grid container
        id='form-wrapper'
        direction='column'
        spacing='2'>
            <FormLabel id='form-label'>Employee Onboarding Form</FormLabel>
            <Grid item>
                {submitError !== '' && <InputLabel id='submitError'>{submitError}</InputLabel>}
                <TextField
                name='firstName'
                id='first-name-input'
                error = {errorFirstName !== ''}
                helperText = {errorFirstName}
                value={firstName}
                label='First Name'
                variant='outlined'
                inputProps={{
                  maxlength: TEXT_CHARACTER_LIMIT
                }}
                onChange={event => handleChange(event, setFirstName)}
                onBlur={event => formValidation(firstName,
                                                setErrorFirstName,
                                                event.target.name,
                                                textNumRegex,
                                                setIsError,
                                                formState,
                                                errorMessages)}/>
            </Grid>


            <Grid item>
                <TextField
                name='lastName'
                id='last-name-input'
                error = {errorLastName !== ''}
                helperText = {errorLastName}
                value={lastName}
                label='Last Name'
                variant='outlined'
                inputProps={{
                  maxlength: TEXT_CHARACTER_LIMIT
                }}
                onChange={event => handleChange(event, setLastName)}
                onBlur={event => formValidation(lastName,
                                                setErrorLastName,
                                                event.target.name,
                                                textNumRegex,
                                                setIsError,
                                                formState,
                                                errorMessages)}/>
            </Grid>


            <Grid item>
                <TextField
                name='dateOfBirth'
                id='date-of-birth-input'
                error = {errorDateOfBirth !== ''}
                helperText = {errorDateOfBirth}
                value={dateOfBirth}
                label='Date of Birth'
                placeholder='DD/MM/YYYY'
                variant='outlined'
                inputProps={{
                  maxlength: DATE_CHARACTER_LIMIT
                }}
                onChange={event => handleChange(event, setDateOfBirth)}
                onBlur={event => formValidation(dateOfBirth,
                                                setErrorDateOfBirth,
                                                event.target.name,
                                                dateRegex,
                                                setIsError,
                                                formState,
                                                errorMessages)}/>
            </Grid>


            <Grid item>
                <InputLabel id="select-input-label">Country</InputLabel>
                <Select
                name='country'
                label='country'
                variant='outlined'
                value={country}
                inputProps={{ id: 'country-input' }}
                onChange={event => handleChange(event, setCountry)}>
                    {countries.map(mapCountry => <MenuItem key={mapCountry} value={mapCountry}>{mapCountry}</MenuItem>)};
                </Select>
            </Grid>
            <Grid item>
                <SubForm />
            </Grid>
            <Grid item>    
                <Grid container justify="flex-end">
                    <Button
                    id='submit-button'
                    type='submit'
                    variant="outlined"
                    color="primary">
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    </form>
  );
}

export default Form;