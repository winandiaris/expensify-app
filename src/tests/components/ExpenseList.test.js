import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseList} from '../../component/ExpenseList'
import expenses from '../fixtures/expenses'

test('Harus bisa merender ExpenseList menggunakan data dari fixtures/expenses',
() => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot()
}
)