import React from 'react'
import ExpenseDashboardPage from '../../component/ExpenseDashboard'
import {shallow} from 'enzyme'
//import expenses from '../fixtures/expenses'

test('Harus bisa merender ExpenseDashboardPage menggunakan data dari fixtures,',
()=>{
    const wrapper = shallow(<ExpenseDashboardPage/>)
    expect(wrapper).toMatchSnapshot()
}
)