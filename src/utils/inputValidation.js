//Have no idea how which characters to validate for multiple languages so form validation will be exclusively for english

export const TEXT_CHARACTER_LIMIT = 50;
export const NUM_CHARACTER_LIMIT = 15;
export const DATE_CHARACTER_LIMIT = 10;
export const HOLIDAY_ALLOWANCE_CHARACTER_LIMIT = 3;

export const textRegex = /^[a-zA-Z]+$/;
export const numberRegex = /^[0-9]+$/;
export const textNumRegex = (/^[a-zA-Z0-9]+$/);
export const dateRegex = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;

export async function formValidation (stateVariable, setErrorFunction, variableName, regexTest, setIsError, formState, errorMessages, holidayAllowance = 0) {
   //if(stateVariable.length === 0) return setErrorFunction('');
   
   if(variableName === 'dateOfBirth') {
      if(!regexTest.test(stateVariable)) {
         setErrorFunction(errorMessages[variableName]);
         return setIsError(true);
      }
   } else {
      for(let i = 0; i < stateVariable.length; i++) {
         if(!regexTest.test(stateVariable[i]))  {
            setErrorFunction(errorMessages[variableName]);
            return setIsError(true);
         }
      }

      if(variableName === 'holidayAllowance') {
         if(stateVariable < holidayAllowance || stateVariable > 365) {
            setErrorFunction(`Only between ${holidayAllowance} and 365`)
            return setIsError(true);
         };
      }
   }

   await setErrorFunction('');

   for (const [key, value] of Object.entries(formState)) {
      if(key.includes('error')) {
         if(value !== '') return setIsError(true);
      }
   }

   return setIsError(false);
};