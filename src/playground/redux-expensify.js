import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

//================== ALUR =====================================================
// 
//    

// *1. ACTION GENERATOR
//    ACTION GENERATOR, fungsi :
//      - Memberikan Nilai default masing-masing state/property
//            (action akan mengambil nilai state DEFAULT ini,
//            jika tidak ada perubahan di dispatch )
//
//      - Membuat/mendeklarasikan STATE
//          - property:
//              - identitas (type) = wajib, yang dijadikan id untuk diolah di REDUCER
//              - property2 STATE = untuk merubahnya lebih baik melalui DISPATCH
//
//      * Tidak semua state dideklarasikan di ACTION GEN , contohnya dibawah
//        di ACTION GEN hanya ada 1 state yaitu 'addExpense', sementara state 'filters'
//        dideklarasikan di REDUCE filters

// *2. ACTION DISPATCH
//    - Memanfaatkan PROPERTY2 yang sudah di deklarasikan di ACTION GENERATOR,
//      untuk dilakukan perubahan/pemberian nilai baru
//    - Perubahan nilai akan menghasilkan nilai state baru, 
//      dan selanjutnya diolah REDUCER

// *3. REDUCER
//    - Mengambil nilai state terakhir dari DISPATCH <--> ACTION GEN
//    - Nilai state (baik default / ada penambahan di dispatch)
//      diolah/diberikan logic berdasarkan - 'type' pada ACTION GEN -
//    - Hasil pengolahan REDUCER, akan di ambiL STORE

// *4. STORE
//    - Mengorganisir, REDUCER mana saja yang ingin di render

// *5. RENDER
//   - Merender STORE

// *Urutan kode: 
//      - ACTION GENERATOR
//      - REDUCER
//      - STORE
//      - RENDER
//      - ACTION DISPATCH
// 
//************************************************************************ */

//======================== ACTION GENERATOR ==========================
//-- 2. Berisi Nilai Defaut State dan deklarasi STATE, state ini yang akan diolah REDUCER
    // ADD_EXPENSE 
    const addExpense = (
        {
            //Ini adalah argumen dalam function
            //Memberi default value pada STATE,
            //Nilai ini yang akan diambil, jika tidak ada perubahan nilai di DISPATCH
            description='',
            note='', 
            amount=0, 
            createdAt=0,
            //Date='53' 
        } = {}
    ) => ({
        //Deklarasi STATE
        //property2 STATE ini bisa diolah/diubah nilainya di dispatch action,
        //Nilai akhir setelah perubahan di DISPATCH akan diolah oleh REDUCER
        type: 'ADD_EXPENSE', //sebagai ID untuk REDUCER
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt,
            //Date
        }
    })


    //---------------------- add_expense end -------------------

    // REMOVE_EXPENSE
    const removeExpense = ({id} = {}) => ({
        type: 'REMOVE_EXPENSE',
        id
    })

    //EDIT_EXPENSE
    const editExpense = (id, updates) => ({
        type : 'EDIT_EXPENSE',
        id,
        updates

    })

    //SET_TEXT_FILTER
     const setTextFilter = (text = '') => ({
         type: 'SET_TEXT_FILTER',
         text
     })

    //SORT_BY_DATE
        const sortByDate = () => ({
            type: 'SORT_BY_DATE',
            
        })
    //SORT_BY_AMOUNT
        const sortByAmount = () => ({
            type: 'SORT_BY_AMOUNT',
            
        })
    //SET_START_DATE
    const setStartDate = (startDate) => ({
        type: 'SET_START_DATE',
        startDate
    })

    //SET_END_DATE
    const setEndDate = (endDate) => ({
        type: 'SET_END_DATE',
        endDate
    })

//---------------------- action generator end --------------------


//========================== REDUCER ==========================================
//== 2. reducer mengolah STATE dan logic mengambil dari ACTION DISPATCH & ACTION GENERATOR
        //============= Expenses Reducer===============================
        const expensesReducerDefaultState = []

        const expensesReducer = (state = expensesReducerDefaultState, action) => {
            // mendapatkan data action.type dari ACTION DISPATCH
            switch (action.type){
                case 'ADD_EXPENSE':
                    //return state.concat(action.expense)
                    return [
                        //state dari ADD_EXPENSE bentuknya array
                        // ...state --> spread operator, mengeluarkan data dari array sehingga berdiri masing2
                        //action.expense-->dari ACTION GENERATOR
                        ...state, 
                        action.expense  
                    ]
                case 'REMOVE_EXPENSE' : 
                    return state.filter(({id}) => {
                        return id !== action.id //true
                    })
                case 'EDIT_EXPENSE' :
                    return state.map((expense) => {
                        if (expense.id === action.id){
                            return {
                                ...expense, //men-spread / menampilkan semua isi array
                                ...action.updates //menampilkan hasil perubahan
                            }
                        } else {
                            return expense
                        }
                    })

                default:
                    return state
            }

        }
        //------------- expenses reducer end-----------------------------

        //=============== Filters Reducer ===============================
        //Deklarasi STATE melalui REDUCER
        const filtersReducerDefaultState = {
            text:'',
            sortBy:'date',
            startDate:undefined,
            endDate: undefined
        } 

        const filterReducer = (state = filtersReducerDefaultState, action) => {
            switch (action.type) {
                case 'SET_TEXT_FILTER':
                    return {
                        ...state,
                        text: action.text
                    }
                case 'SORT_BY_DATE' :
                            return {
                                ...state,
                                sortBy: 'date'
                            }
                 case 'SORT_BY_AMOUNT' :
                            return {
                                ...state,
                                sortBy: 'amount'
                            }
                case 'SET_START_DATE' : 
                            return {
                                ...state,
                                startDate: action.startDate
                            }
                case 'SET_END_DATE' :
                            return {
                                ...state,
                                endDate: action.endDate
                            }
                default:
                    return state
            }
        }
        //-------------- filter reducer end--------------------------------

//Get visible xpenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !=='number' || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !=='number' || expense.createdAt <= endDate
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1:-1
        } else if (sortBy === 'amount'){
            return a.amount < b.amount ? 1:-1
        }
    })
}


//============================== STORE CREATION===========================
//--4. menentukan reducer mana saja yang ditampilkan
//-----mengambil hasil perubahan state terakhir - setelah diolah reducer
const store = createStore(
    combineReducers({
        //reducer yang akan ditampilkan
        expenses: expensesReducer,
        filters: filterReducer
    })
)
//----------------------- store creation end -------------------------------

//========================== RENDER =======================================
//==> 5. menampilkan store->combineReducer->reducer2
store.subscribe(()=>{
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})
//----------------------- render end -------------------------------------


//======================== ACTION dispatch ====================================
// 3. -- Hanya sebagai pengubah STATE di ACTION GEN
//-------Jadi untuk merubah nilai STATE, tidak perlu langsung merubahnya di ACTION GEN
//---mengambil nama ACTION() dari ACTION GENERATOR,  STATE dirubah disini
//------perubahan NILAI PROPERTY disini akan dikembalikan nilainya ke ACTION GENERATOR


const expenseOne = store.dispatch(addExpense({ description:'Rent', amount: 100, createdAt: 999}))
const expenseTwo = store.dispatch(addExpense({ description:'Cofee', amount: 200, createdAt: 1000}))

// store.dispatch(removeExpense({id: expenseOne.expense.id}))
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}))

// store.dispatch(setTextFilter('rent'))

// store.dispatch(setStartDate(1001))
//  store.dispatch(setStartDate(1000))
// store.dispatch(setEndDate(2000))
//------------------------ action dispatch end --------------------------------


//mencoba mengambil nilai awal di expenseOne




//============================== S T A T E ===================================
//---- 1. menyediakan state awal ----------
// const demoState = {
//     //bentuk array
//     expenses : [{
//         id : 'sdfsdf',
//         description : 'january Rent',
//         note : 'this was final payment',
//         amount : 500000.00,
//         createdAt: 0,
//         //date: ''
//     }],
//     //bentuk biasa
//     filters : {
//         text: 'rent',
//         sortBy: 'amount', //date or amount
//         startDate: undefined,
//         endDate: undefined
//     }
// }

// const user = {
//     name: 'aris',
//     age: 45
// }

// console.log({
//     ...user
// })