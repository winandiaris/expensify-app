import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'
import thunk from 'redux-thunk'

//menjalankan devtools atau jika tidak menjalankan compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose


//============================== STORE CREATION===========================
//--4. menentukan reducer mana saja yang ditampilkan
//-----mengambil hasil perubahan state terakhir - setelah diolah reducer

export default () => {
    const store = createStore(
        combineReducers({
            //reducer yang akan ditampilkan
            expenses: expensesReducer,
            filters: filtersReducer
        }),

        //async pada store
        composeEnhancers(applyMiddleware(thunk))

        //untuk developer tools, dimatikan waktu proses async, digantikan composeEnhancers
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return store
}

//----------------------- store creation end -------------------------------