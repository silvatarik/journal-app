import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { LoginView } from '../components/auth/LoginView';
import { RegisterView } from '../components/auth/RegisterView';

export const DashboardAuth = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/auth/login" component={LoginView} />
                    <Route exact path="/auth/register" component={RegisterView} />
                </Switch>
            </div>
        </Router>
    )
}
