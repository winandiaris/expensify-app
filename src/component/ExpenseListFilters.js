import React from 'react'
import {connect} from 'react-redux'
import {DateRangePicker} from 'react-dates'
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters'
//import 'react-dates/initialize'

class ExpenseListFilters extends React.Component{
    state={
        calendarFocus: null //state berdasarkan tracking dari state calendarFocused: di komponent expenseForm.js → karena form tanggal akan ditampilkan disini
    }
    onDatesChange=({startDate, endDate}) => {//objek startDate dan endDate merupakan state dari action/filters
        this.props.dispatch(setStartDate(startDate))//melakukan dispatch berdasarkan action setStartDate dimana argumennya adalah state startDate
        this.props.dispatch(setEndDate(endDate))
    }
    onFocusChange= (calendarFocused)=>{
        this.setState(()=>({calendarFocused}))//setState->melakukan perubahan state calendarFocused
    }
    render(){
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={(e)=>{//input berupa text dari user dijadikan props(text adalah state dari filters.js), karena nanti akan ditampilkan/dipanggil di ExpenseList.js 
                    this.props.dispatch(setTextFilter(e.target.value)) //e.target.val = input dari user
                }}/>
                <select
                    value={this.props.filters.sortBy}//sortBy adalah state yg dideklarasikan di reducers/filters.js
                    onChange={(e)=> {//handle perubahan
                        if (e.target.value === 'date'){//jika input bernilai date(date = value dari state sortBy di reducers/filters.js)
                            this.props.dispatch(sortByDate())//maka akan dispatch action sortByDate
                        }else{e.target.value === 'amount' //jika input bernilai amount(amount = value dari state sortBy di reducers/filters.js)
                            this.props.dispatch(sortByAmount())//maka akan dispatch action sortByAmount
                        }
                    }}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate} //instance dari moment() dg target state startDate di filters.js
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange} //menghandle perubahan/dispatch melalui method onDatesChange() diatas
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}//untuk mereset tanggal
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                    startDateId={''}
                    endDateId={''}

                />
            </div>
        )
    }
}

//------------------------------------------------------------
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}
export default connect(mapStateToProps)(ExpenseListFilters)