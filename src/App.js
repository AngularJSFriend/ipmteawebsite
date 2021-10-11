import React from 'react'
import Home from './Home';
import { Switch, Route } from "react-router-dom";
import About from './Pages/About';
import Register from './Pages/Register';
import Contact from './Pages/Contact';
import PointTable from './Pages/PointTable';
import Programs from './Pages/Programs';
import Privacypolicy from './Privacypolicy';
import Error  from './Pages/Error';

const App = () => {
  return (
    <>
     <Switch>
        <Route exact path="/"  component={Home}></Route>
        <Route  path="/about" component={About}></Route>
        <Route  path="/contact" component={Contact}></Route>
        <Route  path="/pointtable" component={PointTable}></Route>
        <Route  path="/programs" component={Programs}></Route>
        <Route  path="/register" component={Register}></Route>
        <Route path="/Privacypolicy" component={Privacypolicy}></Route>
         
          <Route component={Error}></Route>
      
        </Switch>    
  </>
  )
}

export default App
