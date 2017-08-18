import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, Switch, IndexRoute, browserHistory} from 'react-router';

// for login
import {UserAuthWrapper} from 'redux-auth-wrapper'
import {routerActions} from 'react-router-redux';


import LoginContainer from './containers/LoginContainer';
import AppContainer from './containers/AppContainer';
import  DashboardContainer  from './containers/DashboardContainer';
import  OrderContainer  from './containers/OrderContainer';
import ProoductListContainer from './containers/ProductListContainer';
import ProoductFormContainer from './containers/ProductFormContainer';
import  AdminListContainer  from './containers/AdminListContainer';
import  AdminFormContainer  from './containers/AdminFormContainer';

import {requireAuthentication} from './utils/index';

export class AppRoutes extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path="/login" component={LoginContainer}/>
                <Route path="/" component={requireAuthentication(AppContainer)}>
                    <IndexRoute component={DashboardContainer}/>
                    <Route path="dashboard" component={DashboardContainer}/>
                    <Route path="orders" component={OrderContainer}/>
                    <Route path="products">
                        <IndexRoute component={ProoductListContainer}/>
                        <Route path="add" component={ProoductFormContainer}/>
                        <Route path="edit/:id" component={ProoductFormContainer}/>
                    </Route>
                    <Route path="admins">
                        <IndexRoute component={AdminListContainer}/>
                        <Route path="add" component={AdminFormContainer}/>
                        <Route path="edit/:id" component={AdminFormContainer}/>
                    </Route>
                </Route>
            </Router>
        )
    }
}
