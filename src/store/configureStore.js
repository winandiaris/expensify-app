import {createStore, combineReducers} from 'redux'
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'
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

        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return store
}

//----------------------- store creation end -------------------------------