//========================== REDUCER ==========================================
//== 2. reducer mengolah STATE dan logic mengambil dari ACTION DISPATCH & ACTION GENERATOR
        //============= Expenses Reducer===============================
        const expensesReducerDefaultState = []

        //const expensesReducer = (state = expensesReducerDefaultState, action) => {
        export default (state = expensesReducerDefaultState, action) => {
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