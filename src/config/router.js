import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from '../components/layout/Layout.js';
import HomePage from '../components/home/HomePage.js';
import AboutPage from '../components/about/AboutPage.js';

const router = (
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={HomePage} />
            <Route path="about" component={AboutPage} />
        </Route>
    </Router>
); 

export default router;