import React from 'react';
import { Grid } from '@material-ui/core'
import Form from './components/form';
import { FormProvider } from './context/form-context';

function App() {
  return (
    <Grid container
    direction='column'
    alignItems='center'
    xs={12} sm={12} md={12} lg={12} xl={12}>
      <FormProvider>
        <Form />
      </FormProvider>
    </Grid>
  );
}

export default App;