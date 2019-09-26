import {addExpense, editExpense, removeExpense} from '../../actions/expenses'
import { testNameToKey } from 'jest-snapshot/build/utils';

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
    const expenseData = {
        description:'rent',
        amount:2000,
        createdAt:1000,
        note:'ini adalah sewa awal bulan'
            
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    
    })
        
})


test('addExpense dengan action object bernilai default',()=>{
const action = addExpense()
expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense:{
        id: expect.any(String),
        description:'',
        amount:0,
        createdAt:0,
        note:''
    }
})
})