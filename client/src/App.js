import React, { Component, Fragment } from 'react';
import { DataConsumer } from './context/DataContext';
// Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Pages
import Home from './pages/Home';

// Components
import Nav from './components/global/Nav';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <DataConsumer>
            {({data: {links, contact_number}}) => (
              <Nav links={links} contact={contact_number} />
            )}
          </DataConsumer>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
};
