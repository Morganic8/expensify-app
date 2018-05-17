import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

//Component Dependencies
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import HelpExpense from '../components/HelpExpense';
import NotFoundExpense from '../components/NotFoundExpense';
import Header from '../components/Header';

const AppRouter = ()=> (

    <BrowserRouter>
    <div>
        <Header/>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpense}/>
            <Route path="/edit/:id" component={EditExpense}/>
            <Route path="/help" component={HelpExpense}/>
            
            <Route component={NotFoundExpense}/>
        </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;