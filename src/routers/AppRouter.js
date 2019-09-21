import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import ExpenseDashboardPage from '../component/ExpenseDashboard'
import AddExpensePage from '../component/AddExpense'
import EditExpensePage from '../component/EditExpense'
import HelpPage from '../component/Help'
import NotFoundPage from '../component/NotFound'
import Header from '../component/Header'

  
//================Router Component=====================
const AppRouter = ()=>(
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                {/* exact berfungsi agar path hanya merender halaman itu saja, tidak semua */}
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/> 
            </Switch>
        </div>
        
    </BrowserRouter>
)

export default AppRouter