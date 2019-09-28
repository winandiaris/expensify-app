import React from 'react'
//import { shallowToJson  } from 'enzyme-to-json'
import toJSON from 'enzyme-to-json'
import { shallow } from 'enzyme'
//import ReactShallowRenderer from 'react-test-renderer/shallow'
import Header from '../../component/Header'

test('harus bisa merender Header dengan benar' ,()=>{
    const wrapper = shallow(<Header/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
     //expect(shallowToJson(wrapper)).toMatchSnapshot()
     //expect(wrapper).toMatchSnapshot()


    //expect(wrapper.find('h1').text()).toBe('Expensify App')
    //  const renderer = new ReactShallowRenderer()
    // renderer.render(<Header/>)
    //  expect(renderer.getRenderOutput()).toMatchSnapshot()
    //console.log(renderer.getRenderOutput())
})

//react-test-render