import React from 'react';
import { CssBaseline } from '@material-ui/core';
import Main from '../../Components/Main/Main';
import VR from '../../Components/VR/VR';
import Footer from '../../Components/Footer/Footer';
import Creations from '../../Components/Creations/Creations';

const App = () => { 
  return (
    <>
      <CssBaseline />
      <Main/>
      <VR/>
      <Creations/>
      <Footer/>
    </>
  );

}

export default App;
