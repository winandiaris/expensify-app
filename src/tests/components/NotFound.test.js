import React from 'react'
import {shallow} from 'enzyme'
import NotFoundPage from '../../component/NotFound'
//import expenses from '../fixtures/expenses'

test('harus bisa merender NotFoundPage',()=>{
    const wrapper = shallow(<NotFoundPage/>)
    expect(wrapper).toMatchSnapshot()
})