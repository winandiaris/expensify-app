import uuid from 'uuid'
import database from '../firebase/firebase'

//======================== ACTION GENERATOR ==========================
//-- 2. Berisi Nilai Defaut State dan deklarasi STATE, state ini yang akan diolah REDUCER
    // ADD_EXPENSE 
    // export const addExpense = (
    //     {
    //         //Ini adalah argumen dalam function
    //         //Memberi default value pada STATE,
    //         //Nilai ini yang akan diambil, jika tidak ada perubahan nilai di DISPATCH
    //         description='',
    //         note='', 
    //         amount=0, 
    //         createdAt=0,
    //         //Date='53' 
    //     } = {}
    // ) => ({
    //     //Deklarasi STATE
    //     //property2 STATE ini bisa diolah/diubah nilainya di dispatch action,
    //     //Nilai akhir setelah perubahan di DISPATCH akan diolah oleh REDUCER
    //     type: 'ADD_EXPENSE', //sebagai ID untuk REDUCER
    //     expense: {
    //         id: uuid(),
    //         description,
    //         note,
    //         amount,
    //         createdAt,
    //         //Date
    //     }
    // })

    //ada perubahan struktur state di addExpense ketika proses koneksi dengan firebase
     export const addExpense = (expense) => ({// addExpense sekarang bernilai var expense yang dideklarasikan dibawah
         type: 'ADD_EXPENSE',
         expense
     })

     //Async data action menghubungkan dengan firebase
    export const startAddExpense = (expenseData = {}) => { //memasukkan expenseData kedalam object kosong
        return (dispatch) => { //memberikan akses dispatch
            const { //deklarasi object/state dengan nilai default kosong
                description='',
                note='', 
                amount=0, 
                createdAt=0
            } = expenseData //object/state di beri nama expenseData

            //var data yg berisi object/state diatas. ini menjadi nilai addExpense(). ini juga yang akan di upload ke firebase dengan push()
            const expense = {description, note, amount, createdAt} 

            //ref() = menghubungkan ke database expense (otomatis akan membuat baru jika belum ada)
            //push() = yang diupload adalah variabel data expense
            //then() = menampilkan!!! mengambil nilai dari ref-->expense
            return database.ref('expense').push(expense).then((ref)=>{
                dispatch(addExpense({ //melakukan dispatch ke addExpense,
                    id: ref.key, // mengambil key dari ref, yaitu database expense
                    ...expense // setelah key ditentikan, isi expense yang mengikutinya di extract mengikuti key
                }))
            })
        }
    }
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