//
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {startAddExpense, addExpense, editExpense, removeExpense} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

test('should setup remove expense action object',()=>{
    //buat variabel 'action' dengan nilai method removeExpense(), dan argument id dengan nilai 123abc
    const action = removeExpense({id:'123abc'})
    //buat expect dengan argumen 'action' , dot toEqual dengan nilai type:, dan id yang seharusnya muncul 
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    })
})

test('edit expense',()=>{
    const action = editExpense('123abc',{note:'new note value'})
    expect(action).toEqual({
       type:'EDIT_EXPENSE',
        id:'123abc',
        updates: {note:'new note value'}
    })
})

//untuk addExpense akan diuji 2 kasus
//1. value ketika digunakan
//2. value dalam kondisi default
test('addExpense dengan nilai yang ditentukan',()=>{
    // const expenseData = {
    //     description:'rent',
    //     amount:2000,
    //     createdAt:1000,
    //     note:'ini adalah sewa awal bulan'
            
    // }
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: expenses[2]
    
    })
        
})

test('harus bisa menambahkan data expense ke database dan store', (done)=>{
    const store = createMockStore({})
    const expenseData = {
        description: 'Mouse',
        amount:3000,
        note: 'This one is better',
        createdAt: 1000

    }

    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })

        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
        }).then((snapshot)=>{
            expect(snapshot.val()).toEqual(expenseData)
            })
            done()
})

test('harus bisa menambahkan data default expense ke database dan storeku', (done)=>{
    const store = createMockStore({})
    const expenseDefaults = {
        description: '',
        amount:0,
        note: '',
        createdAt: 0

    }

    store.dispatch(startAddExpense({})).then(()=>{
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        })

        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
        }).then((snapshot)=>{
            expect(snapshot.val()).toEqual(expenseDefaults)
            })
            done()
    
})

// //test untuk mengecek action default value
// //test ini dimatikan karena pada proses async, default value di addExpense sudah hilang
// test('addExpense dengan action object bernilai default',()=>{
// const action = addExpense()
// expect(action).toEqual({
//     type:'ADD_EXPENSE',
//     expense:{
//         id: expect.any(String),
//         description:'',
//         amount:0,
//         createdAt:0,
//         note:''
//     }
// })
// })