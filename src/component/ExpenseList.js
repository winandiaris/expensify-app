import React from 'react'
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

//bentuk props
//komponen ini yang di tampilkan/dipanggil oleh ExpenseDashboard, oleh karena itu bentuknya props
const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {/* Mengambil data -expenses, filters- dari bawah (mapStateProps) */}
        {props.expenses.map((expense) =>{// expenses = state awal, expense = nama objek yang menunjukan per individu
            return <ExpenseListItem key={expense.id} {...expense}/>
        })}
        {props.filters.text}
    </div>
)

//state
//sumber data state dari ExpenseList diatas
const mapStateToProps = (state) => {
    return {
        //objek baru/props, mengambil nilai dari state action
        expenses: selectExpenses(state.expenses, state.filters),
        filters: state.filters
    }
}

//menghubungkan mapStateToProps dengan ExpenseList
export default connect(mapStateToProps)(ExpenseList)