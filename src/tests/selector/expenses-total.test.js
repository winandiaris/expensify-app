import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

//selectExpenseTotal() diperlakukan sebagai function yang mendapatkan property/value dari data dummy di fixtures/expenses

test('harus bernilai 0 jika tak ada expenses', ()=>{
    const res = selectExpensesTotal([])// cek respons selectExpenseTotal dari aray kosong
    expect(res).toBe(0) //harus bernilai 0
})

test('harus bisa menjumlahkan single expense', ()=>{
    const res = selectExpensesTotal([expenses[0]]) // cek respons selectExpenseTotal dari satu input (mis: dummy expenses index ke 0)
    expect(res).toBe(195) //harus bernilai 195, karena data di fixtures memnag segitu
})

test('harus bisa menjumlahkan multiple expense', ()=>{
    const res = selectExpensesTotal(expenses) // cek respons selectExpenseTotal dari keseluruhan data fixtures/expenses 
    expect(res).toBe(114195) //total seharusnya segitu
})