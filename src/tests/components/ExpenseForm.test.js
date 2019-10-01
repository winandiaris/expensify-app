import React from 'react'
import {shallow} from 'enzyme'
import moment from 'moment'
import ExpenseForm from '../../component/ExpenseForm'
import expenses from '../fixtures/expenses'

test('Harus Bisa merender Form dengan benar (tanpa data) -- proses ini menggunanakan mocking moment()', ()=>{
    const wrapper = shallow(<ExpenseForm/>)
    expect(wrapper).toMatchSnapshot()
})

test('Harus Bisa merender Form dengan menggunakan data dummy', ()=>{
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>)
    expect(wrapper).toMatchSnapshot()
})

test('harus bisa merender error ketika user salah memasukkan form', ()=>{
    const wrapper = shallow(<ExpenseForm/>)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('form').simulate('submit', { //e.preventDefault error tanpa ini
        preventDefault: ()=>{}
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})

test('harus bisa set description ketika terjadi perubahan input',()=>{
    const value = 'New Description'
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(0).simulate('change', {
        target:{value}
    })
    expect(wrapper.state('description')).toBe(value) //tidak mencetak snapshot
})

test('harus bisa set note ketika terjadi perubahan input di textarea', ()=> {
    const value = 'New Note Value'
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('textarea').at(0).simulate('change', {
        target:{value}
    })
    expect(wrapper.state('note')).toBe(value)
})

//bisa set amount ketika hasil input nilai valid, misal 23.50
test('bisa set amount ketika hasil input nilai valid',()=>{
    const value = '23.50'
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(1).simulate('change', {
        target:{value}
    })
    expect(wrapper.state('amount')).toBe(value) //tidak mencetak snapshot
})
//bisa set amount ketika hasil input nilai salah, misal 12.122
test('bisa set amount ketika hasil input nilai salah',()=>{
    const value = '12.122'
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(1).simulate('change', {
        target:{value}
    })
    expect(wrapper.state('amount')).toBe('') //tidak mencetak snapshot
})

//bisa memanggil onSubmit prop ketika isian form valid
test('bisa memanggil onSubmit prop ketika isian form valid', ()=>{
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate('submit', {
        preventDefault: ()=>{}
    })
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    })
})

// //bisa set date baru ketika ada perubahan pada date
// test('bisa set date baru ketika ada perubahan pada date',() => {
//     const now = moment()
//     const wrapper = shallow(<ExpenseForm/>)
//     wrapper.find('SingleDatePicker').prop('onDateChange')(now)
//     expect(wrapper.state('createdAt')).toEqual(now)
// })

// //bisa set calendar focus terhadap perubahan
// test('bisa set calendar focus terhadap perubahan',() => {
//     const focused = true
//     const wrapper = shallow(<ExpenseForm/>)
//     wrapper.find('SingleDatePicker').prop('onFocusChange')({focused})
//     expect(wrapper.state('calendarFocused')).toBe(focused)
// })