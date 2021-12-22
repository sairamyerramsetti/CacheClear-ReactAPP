import React, {useEffect, useState} from 'react';
import { Typography, Grid, Alert } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { clearCaching } from './helpers'; 
import './App.css';
import packageJson from '../package.json';

const useStyles = makeStyles({
  root: {
    marginTop: 100,
  },
});

function App() {  
  const [cacheMessage, setCacheMessage] = useState('');
  const classes = useStyles();

  useEffect(() => {
    // Clearing the application cache based on package.json version changes
    const message = clearCaching();
    setCacheMessage(message);
  }, [packageJson.version]);

  return (
    <Grid container alignItems="center" justifyContent="center" className={classes.root}>
        <Grid item xs={12}>
          <Typography variant="h4" align='center'>
            Example for clearing cache when package.json version changes
          </Typography>
        </Grid>      
        <Grid item xs={12}>
          {cacheMessage && <Alert severity="success">{cacheMessage}</Alert>}
        </Grid>
    </Grid>
  );
}

export default App;
