import selectExpenses from '../../selectors/expenses'
import moment from 'moment'

//karena selectors/expenses.js mempunyai 2 argumen, export default (expenses,filters) maka akan dibuat dummy data untuk kedua argumen tsb

//membuat dummy data expenses. berupa array sesuai dengan action expenses
//karena ingin mengetahui hasil filters, maka disini ada 3 data array sebagai pembanding
const expenses = [{
    id:'1',
    description: 'gum',
    note:'',
    amount: 195,
    createdAt:0 //hari ini
},
{
    id:'2',
    description: 'rent',
    note:'',
    amount: 1955000,
    createdAt:moment(0).subtract(4, 'days').valueOf() //4 hari kebelakang
},
{
    id:'3',
    description: 'Credit Card',
    note:'',
    amount: 4500,
    createdAt:moment(0).add(4, 'days').valueOf()//4 hari ke depan
}
]

//Test Filter by text
test('select expenses',()=>{
    //membuat dummy data filters
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)//argumen berdasarkan selectors/expenses
    expect(result).toEqual([expenses[2], expenses[1]])//ketika filters menggunakan text='e', dan sortBy='date', maka seharusnya yang muncul adalah semua data yang mengandung huruf 'e' dan diurutkan berdasarkan date yaitu array[2] lalu array[1]
})

//Test filter by Startdate
test('filters by startDate',()=>{
    const filters= {
        text:'',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[0]])//expect=hasil dari program(otomatis), toEqual= hasil urutan seharusnya
})

//Test Filter by EndDate
test('test by endDate', ()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days')
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[0], expenses[1]])
})

//Test sort by Date
test('test sort by date',()=>{
    const filters = {
        text: '',
        sortBy:'date',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]])

})

//Test sort by amount
test('test sort by amount', ()=>{
    const filters = {
        text: '',
        sortBy:'amount',
        startdate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[1], expenses[2], expenses[0]])
})