
import filtersReducer from '../../reducers/filters'
import moment from 'moment'
//import { testNameToKey } from 'jest-snapshot/build/utils';

//Test default value
test('default filters value', ()=>{
    const state = filtersReducer(undefined, {type: '@@INIT'}) //filtersReducer(state, action)
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    })
})

//Test mengatur sortBy sehingga mempunyai nilai 'amount'
test('set sortby=>amount', ()=>{
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

//Test mangatur sortBY sehingga mempunyai nilai 'date'
test('sortBy date',()=>{
    const currentState = {
        text:'',
        startDate: undefined,
        endDate: undefined,
        sortBy:'amount'
    }

    const action = {
        type: 'SORT_BY_DATE'
    }
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})

//Test mengatur text filter

test('textfilter',()=>{
    const text = 'this is my filter'
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    }
    const state = filtersReducer(undefined, action)
    expect(state.text).toBe(text)
})

//Test mengatur startDate Filter
test('filter start date',()=>{
    const startDate = moment(0) //deklarasi startDate untuk digunakan action, dibawah
    const action = {
        type:'SET_START_DATE',
        startDate
    }
    const state = filtersReducer(undefined, action)
    expect(state.startDate).toBe(startDate)
})

//Test mengatur Enddate filter
test('test set end date',()=>{
    const endDate = moment(0)
    const action = {
        type:'SET_END_DATE',
        endDate
    }
    const state = filtersReducer(undefined, action)
    expect(state.endDate).toBe(endDate)
})