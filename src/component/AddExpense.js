import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {addExpense} from '../actions/expenses'

const AddExpensePage = (props)=> (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm //memanggil komponen form
        onSubmit={(expense)=>{
            props.dispatch(addExpense(expense)) //dispatch berdasarkan data input dan mengembalikan ke seluruh state expense
            props.history.push('/') //setelah submit, redirect ke halaman depan
        }

        }
        />
    </div>
)

export default connect()(AddExpensePage)