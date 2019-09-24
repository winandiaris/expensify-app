import React from 'react'
import moment from 'moment'
import {SingleDatePicker} from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize'

const now = moment()
console.log(now.format('MMM Do, YYYY'))
//class base component
export default class ExpenseForm extends React.Component {
    //state
    //dirubah bentuk constructor supaya bisa diolah editExpense.js
    constructor(props){
        super(props)
        this.state = {
            description: props.expense ? props.expense.description:'',
            note:props.expense ? props.expense.note:'',
            amount:props.expense ? (props.expense.amount/100).toString():'',
            createdAt: props.expense ? moment(props.expense.createdAt):moment(),
            calendarFocused:false,
            error:''
        }
    }
    
    onDescriptionChange=(e) => {
        const description = e.target.value //state description = mendapatkan input dari form
        this.setState(()=>({description})) //merubah state description menjadi nilai diatas
    }
    onNoteChange=(e)=>{
        const note = e.target.value
        this.setState(()=>({note}))
    }
    onAmountChange=(e)=>{
        const amount = e.target.value
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){//regex-format 2 angka dibelakang koma - regex101.com 
            this.setState(()=>({amount}))
        }
        
    }
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(()=>({createdAt}))
        }
    }
    onFocusChange = ({focused})=>{
        this.setState(()=>({calendarFocused: focused}))
    }
    onSubmit = (e)=>{
        e.preventDefault()//mematikan fungsi bawaan
    
        if(!this.state.description || !this.state.amount){//cek jika desc / amount kosong
            this.setState(()=>({error:'ini ada masalah'}))
        } else {
            this.setState(()=>({error:''}))//jika form terisi, pesan error kosong
            this.props.onSubmit({ //bentuk props karena onSubmit akan dipanggil sebagai child di AddExpense
                description: this.state.description,
                amount: parseFloat (this.state.amount,10)*100, //memparsing bilangan bulat
                createdAt:this.state.createdAt.valueOf(), //valueOf = member moment.js yang berfungsi mendapatkan waktu ms
                note:this.state.note
            })
        }
        
    }     
    
    render() {
        return (
            <div>
                {/* Mencetak state.error jika ada isinya */}
                {this.state.error && <p>{this.state.error}</p>}

                <form onSubmit={this.onSubmit}>
                    <input 
                    type="text" 
                    placeholder="Description"
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                    /> 
                    
                    <input
                    type="text"
                    placeholder="amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                    />

                    {/* component dari react-dates */}
                    <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                    // startDateId={''}
                    // endDateId={''}
                    />

                    <textarea
                    type="text"
                     placeholder="Add a note for your expense (optional)"
                     value={this.state.note}
                     onChange={this.onNoteChange}
                    >

                    </textarea>
                    <button>Add Expense</button>
                    
                </form>
            </div>
        )
    }
}