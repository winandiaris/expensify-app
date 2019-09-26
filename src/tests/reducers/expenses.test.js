import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
import { testNameToKey } from 'jest-snapshot/build/utils';
//test default value
test('expenses reducer',()=>{
const state = expensesReducer(undefined,{type:'@@INIT'})
expect(state).toEqual([])
})

//test add expense

//test remove expense

//test edit expense

