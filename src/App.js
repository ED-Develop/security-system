import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Provider} from "react-redux";
import store from "./Redux/store";
import {BrowserRouter, Route} from "react-router-dom";
import Login from "./components/Login/Login";
import TableContainer from "./components/Table/TableContainer";

const App = () => {
  return (
      <div className="App">
          <Header/>
          <Route exact path='/' component={TableContainer}/>
          <Route exact path='/login' component={Login}/>
      </div>
  );
};

const AppContainer = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    )
};

export default AppContainer;
