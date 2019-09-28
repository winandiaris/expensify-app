
import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses' //import dummy data


//test default value
test('default value expenses reducer',()=>{
const state = expensesReducer(undefined,{type:'@@INIT'})
expect(state).toEqual([])
})

//test add expense
test('add expense',()=>{
    const expense = {
        id : '109',
        description: 'laptop',
        note: '',
        createdAt: 20000,
        amount: 29500

    }
    const action = {
        type: 'ADD_EXPENSE',
        expense: expense
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual([...expenses, expense])

})
//test remove expense
// test()->deklarasi action->deklarasi state=reducers->expect()
test('remove expense by id',()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id: expenses[1].id
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

//test remove expense, jika id tidak ada maka tidak dijalankan
test('tidak bisa menghapus jika tidak ada id', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1',
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})


//test edit expense
test('edit expense', ()=>{
    const data = { 
        amount: 1950,  
}
    const action = {
        type: 'EDIT_EXPENSE',
        id:expenses[1].id,
        updates:{
            amount: data.amount,
        }
    }
    const state = expensesReducer(expenses, action)
   
    expect(state[1].amount).toBe(data.amount)
})

//tidak menjalankan editExpense, ketika id expense tiada

test('jika expense kosong ', ()=>{
    const amount = 1950
    const action = {
        type:'EDIT_EXPENSE',
        id:'-1',
        updates:{
            amount : amount
    }}
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})