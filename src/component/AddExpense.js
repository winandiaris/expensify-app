import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {startAddExpense} from '../actions/expenses'


export class AddExpensePage extends React.Component{
    onSubmit = (expense)=>{
        this.props.startAddExpense(expense)
        this.props.history.push('/') //setelah submit, redirect ke halaman depan
    }
    render(){
        return(
            <div>
                 <h1>Add Expense</h1>
                <ExpenseForm //memanggil komponen form
                onSubmit={this.onSubmit}
                />
            </div>
               
        )
    }
}

//Demi test - pembuatan mapDispatchToProps untuk menjembatani onSubmit dengan proses dispatch
const mapDispatchToProps = (dispatch)=>({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
})

export default connect(undefined, mapDispatchToProps )(AddExpensePage)


// //versi stateless component
// const AddExpensePage = (props)=> (
//     <div>
//         <h1>Add Expense</h1>
//         <ExpenseForm //memanggil komponen form
//         onSubmit={(expense)=>{
//             //dimatikan karena -addExpense(expense)- tidak ramah testing, penggantinya adalah props.onSubmit dibawah
//             // props.dispatch(addExpense(expense)) //dispatch berdasarkan data input dan mengembalikan ke seluruh state expense
            
//             props.onSubmit(expense)
//             props.history.push('/') //setelah submit, redirect ke halaman depan
//         }
//     }
//         />
//     </div>
// )