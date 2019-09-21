import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {editExpense, removeExpense} from '../actions/expenses'

const EditExpensePage = (props) => {
    
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense)=>{
                    props.dispatch(editExpense(props.expense.id, expense)) //akan merubah item berdasarkan id
                    props.history.push('/') //setelah tekan tombol edit, akan redirect ke hal. utama
                    
                }}
                />

            <button onClick={() => { //onClick Remove button
                props.dispatch(removeExpense({id: props.expense.id}))//dispatch berdasarkan reducer removeExpense by 'id'
                props.history.push('/')
            }}>Remove</button>
             {/* <p>This is edit page with id of {props.match.params.id}</p>  */}
             {/* <p>This is edit page</p> */}
        </div>
    )
}

//const mapStateToProps = (state,props)
    //mengakses state karena akan dilakukan pencarian state - expenses array
    //apa yang di cari adalah props.match.params.id dimana itu adalah suatu props - data id dalam expenses array
const mapStateToProps = (state, props) => {
    return {
    //expense: ---> hanya nama object
    //state.expenses.find(()=>{ ---> mengakses state.expenses dan melakukan pencarian didalam array itu
    //expense.id ---> ini adalah id individual / per item (yang awalnya diolah di ExpenseList.js
        //(kenapa kok muncul expense sebagai data per item, prosesnya ada di ExpenseList.js)
    //=== props.match.params.id ---> cek expense.id yang sama dengan props.match.params.id
    expense: state.expenses.find((expense)=> expense.id === props.match.params.id)
}
}

 //connect()(EditExpensePage)---> memnungkinkan props.match.params.id diolah di mapStateToProps
 //connect()(mapStateToProps)(EditExpensePage)---> memnungkinkan keduanya terkonek
export default connect(mapStateToProps)(EditExpensePage)