import React from 'react'
import {shallow} from 'enzyme'
import ExpensesSummary from '../../component/ExpensesSummary'



test('harus bisa merender ExpensesSummary dengan data 1 expense', ()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}/>)
    expect(wrapper).toMatchSnapshot()
})

test('harus bisa merender ExpensesSummary dengan data multiple expense', ()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={23512340987}/>)
    expect(wrapper).toMatchSnapshot()
})