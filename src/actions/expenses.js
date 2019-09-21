import uuid from 'uuid'

//======================== ACTION GENERATOR ==========================
//-- 2. Berisi Nilai Defaut State dan deklarasi STATE, state ini yang akan diolah REDUCER
    // ADD_EXPENSE 
    export const addExpense = (
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
    export const removeExpense = ({id} = {}) => ({
        type: 'REMOVE_EXPENSE',
        id
    })

    //EDIT_EXPENSE
    export const editExpense = (id, updates) => ({
        type : 'EDIT_EXPENSE',
        id,
        updates

    })