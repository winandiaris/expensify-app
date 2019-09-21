import {createStore} from 'redux'

//Action Generator - fungsi yang mengorganisir action object/dispatch
const incrementCount = ({incrementBy = 1} = {}) =>({
    type: 'INCREMENT',
    incrementBy: incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
})

const resetCount = () => ({
    type: 'RESET' 
})

const setCount = ({count}) => ({
    type: 'SET', 
    count: count
})

//Reducer
//1. Reducer adalah full functions
//2. jangan pernah merubah state dan actions
const countReducer = (state = {count:0}, action)=>{
    //logic ketika type action dispatch diakses, maka state akan dirubah
    switch (action.type) {
        case 'INCREMENT':
            //jika action berupa number, maka bernilai action itu, else bernilai 1
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return {
                count : state.count + incrementBy
            }
        case 'DECREMENT' :
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
            return {
                count : state.count - decrementBy
            }
        case 'RESET' :
            return {
                count : 0
            }
        case 'SET':
            return {
                count : action.count
            }
        default:
            return state
    }
    
}

//membuat store dengan argumen - state & action -
//state = count:0
//action = dispatch value
const store = createStore (countReducer)
//Subscribe
store.subscribe(()=>(
    console.log(store.getState())
))



// const unsubscribe = store.subscribe(()=>(
//     console.log(store.getState())
// ))


//Action - dispatch = action yang dikirimkan ke store, berdasarkan type
    store.dispatch(incrementCount())
    //merubah value incrementBy pada action generator melalui dispatch
    store.dispatch(incrementCount({incrementBy: 5}))
    store.dispatch(decrementCount({decrementBy: 2}))
    store.dispatch(resetCount())
    store.dispatch(setCount({count: 101}))
    store.dispatch(decrementCount({decrementBy: 100}))

   
      

//     // count +1 = 0 + 1 = 1
//     store.dispatch(
//         {
//             type: 'INCREMENT',
//             incrementBy: 5
//         }
//     )
//     // count +1 = 1 + 1 = 2
//     store.dispatch(
//         {
//             type: 'INCREMENT'
//         }
//     )
//     //unsubscribe()
//     //reset count = Nilai penambahan terakhir diatas = 2, tapi di reset = 0
//     store.dispatch(
//         {
//             type: 'RESET'
//         }
//     )

//     store.dispatch(
//         {
//             type: 'SET',
//             count : 101
//         }
//     )
// //count -1 = 0 - 1 = -1
//     store.dispatch(
//         {
//             type: 'DECREMENT',
//             decrementBy : 10
//         }
//     )


// // Mencetak nilai state setelah melalui beberapa action,  = -1
 