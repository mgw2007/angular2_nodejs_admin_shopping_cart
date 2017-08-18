import ReactDOM from "react-dom";
import React from "react";
import {AppContainer} from 'react-hot-loader'
// import {Dashboard} from './dashboard/Dashboard';
import {Root as Dashboard} from "./root";
const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('app')
    )
};

render(Dashboard);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./root', () => {
        render(Dashboard)
    });
}