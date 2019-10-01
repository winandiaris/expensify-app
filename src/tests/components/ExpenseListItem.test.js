import React from 'react'
import ExpenseListItem from '../../component/ExpenseListItem'
import {shallow} from 'enzyme'
import expenses from '../fixtures/expenses'

test('Harus bisa merender ExpenseListItem menggunakan data dummy dari fixtures',
()=>{
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>)
    expect(wrapper).toMatchSnapshot()
}
)