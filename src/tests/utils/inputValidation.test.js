import {textRegex,
        numberRegex,
        textNumRegex,
        dateRegex,
        formValidation} from '../../utils/inputValidation';

describe('form Validation', () => {
    const testSetError = jest.fn(text => text);
    const testIsError = jest.fn(text => text);
    
    it('Validates an input as correct', () => {
        formValidation('7', testSetError, 'test', textNumRegex, testIsError, {}, {test:''}, 2);
        expect(testSetError).toBeCalledWith('');
    });

    it('Validates an input as incorrect', () => {
        formValidation('@', testSetError, 'test', textRegex, testIsError, {}, {test:''}, 2);
        expect(testIsError).toBeCalledWith(true);
    });

    it('Validates an input as corrent when variableName is dateOfBirth', () => {
        formValidation('01/01/2020', testSetError, 'dateOfBirth', dateRegex, testIsError, {}, {test:''}, 2);
        expect(testIsError).toBeCalledWith(false);
    });

    it('Validates an input as incorrent when variableName is dateOfBirth', () => {
        formValidation('a', testSetError, 'dateOfBirth', dateRegex, testIsError, {}, {test:''}, 2);
        expect(testIsError).toBeCalledWith(true);
    });

    it('Validates an input as corrent when variableName is holidayAllowance', () => {
        formValidation('5', testSetError, 'holidayAllowance', numberRegex, testIsError, {}, {test:''}, 2);
        expect(testIsError).toBeCalledWith(false);
    });

    it('Validates an input as incorrent when variableName is holidaAllowance', () => {
        formValidation('a', testSetError, 'holidayAllowance', numberRegex, testIsError, {}, {test:''}, 2);
        expect(testIsError).toBeCalledWith(true);
    });

    it('Validates an input as corrent and setIsError to false', () => {
        formValidation('a', testSetError, 'holidayAllowance', numberRegex, testIsError, {error: ''}, {test:''}, 2);
        expect(testIsError).toBeCalledWith(false);
    });
})