import React from 'react'
import {shallow} from 'enzyme'
import {AddExpensePage} from '../../component/AddExpense'
import expenses from '../fixtures/expenses'

let addExpense, history, wrapper

//variabel yang akan dijalankan pada setiap test sebelum expect()
beforeEach(()=>{
    addExpense = jest.fn()
    history = {push:jest.fn()}
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history}/>) 
})

test('harus bisa merender AddExpense secara benar', ()=>{
    expect(wrapper).toMatchSnapshot()
})

test('harus bisa menghandle onSubmit', ()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1])
})