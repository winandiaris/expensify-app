import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {addExpense} from '../actions/expenses'

const AddExpensePage = (props)=> (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm //memanggil komponen form
        onSubmit={(expense)=>{
            //dimatikan karena -addExpense(expense)- tidak ramah testing, penggantinya adalah props.onSubmit dibawah
            // props.dispatch(addExpense(expense)) //dispatch berdasarkan data input dan mengembalikan ke seluruh state expense
            
            props.onSubmit(expense)
            props.history.push('/') //setelah submit, redirect ke halaman depan
        }
    }
        />
    </div>
)
//Demi test - pembuatan mapDispatchToProps untuk menjembatani onSubmit dengan proses dispatch
const mapDispatchToProps = (dispatch)=>({
    onSubmit: (expense) => dispatch(addExpense(expense))
})

export default connect(undefined, mapDispatchToProps )(AddExpensePage)