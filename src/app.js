import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

//dari ./store/configurestore.js - menampilkan reducer expenses dan filter alaaah
const store = configureStore()


//dispatch - dari 'addExpense', dll - di ./actions/expenses
store.dispatch(addExpense({description: 'Water Bill', amount: 4500}))
store.dispatch(addExpense({description: 'Gas Bill', createdAt:1000}))
store.dispatch(addExpense({description: 'Rent', amount:109500}))
//store.dispatch(setTextFilter('water'))






//mendapatkan NILAI STATE dari variabel STORE diatas
//variabel state inilah sumber data utama
//const state = store.getState()

//sumber data ./selectors/expenses.js
//Mengambil data state expenses dan state filter setelah diolah getVisibleExpenses
//pengolahan meliputi logic filter yg mempengaruhi hubungan startDate:EndDate=CreatedAt
//merubah uppercase menjadi lowecase
//sorting berdasarkan nilai tertinggi
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
// console.log (visibleExpenses)

//variabel yang menggunakan provider untuk mengkases store serta menerapkannya pada <AppRouter/>
const jsx = (
    //memberi nilai store = ./store/configurestore.js
    //provider wajib ada store-nya
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)
//===================ReactDOM=============================================
ReactDOM.render(jsx, document.getElementById('app'));

