import React from "react";
import {BrowserRouter} from 'react-router-dom';
import RoutesNavigation from "./RoutesNavigation";

const App = () =>{
  return(
    <BrowserRouter>
      <RoutesNavigation/>
    </BrowserRouter>    
  );
}

export default App;