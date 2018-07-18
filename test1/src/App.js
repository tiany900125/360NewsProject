import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import Header from './component/Header'
import Footer from './component/Footer'
import Index from './component/index'
import Detail from './component/detail'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Index}></Route>
          <Route path="/detail/:id/" component={Detail}></Route>
          <Index></Index>
        </Switch>
        <Footer />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
