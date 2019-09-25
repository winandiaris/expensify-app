import moment from 'moment'
import {setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount} from '../../actions/filters'

test('menampilkan object setStartDate',()=>{
const action = setStartDate(moment(0))
expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)

})
})

test('menampilkan object setEndDate',()=>{
const action = setEndDate(moment(0))
expect(action).toEqual({
    type:'SET_END_DATE',
    endDate:moment(0)
})
})

test('set text filter',()=>{
    const action = setTextFilter('something')
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:'something'
    })
})

test('sortByDate', ()=>{
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('sortByAmount',()=>{
    const action = sortByAmount()
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    })
})