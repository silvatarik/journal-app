
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import React from 'react'
import { LoginView } from "../components/auth/LoginView";
import { JournalVIew } from "../components/journal/JournalVIew";
import { DashboardAuth } from "./DashboardAuth";
export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth" component={DashboardAuth} />
                    <Route path="/" component={JournalVIew} />
                </Switch>
            </div>
        </Router>
    )
}

