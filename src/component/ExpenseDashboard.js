import React from 'react'
import ExpensesSummary from './ExpensesSummary'
import ExpenseListFilters from './ExpenseListFilters'
import ExpenseList from './ExpenseList'



const ExpenseDashboardPage = ()=> {
    return(
    <div>
        <ExpensesSummary/>
        <ExpenseListFilters/>
        <ExpenseList/>
    </div>
    )
}

export default ExpenseDashboardPage