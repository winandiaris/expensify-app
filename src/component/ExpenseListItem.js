//Export a statenumerless functional component
//render description, amount, createdAt
import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'
import {connect} from 'react-redux'


//deklarasi state yang dibutuhkan
const ExpenseListItem = ({ id, description, amount, createdAt}) => (
    
        <div>
            {/* memberikan 'description' link, yang jika di klik akan menuju hal. edit, dan yang terpenting membawa serta id */}
            <Link to={`/edit/${id}`}> 
                 <h1>{description}</h1>
            </Link>

            {/* menampilkan hasil state amount dan state createdAt */}
            <p>{numeral(amount / 100).format('$0,0.00')}
            -
            {moment(createdAt).format('MMMM Do, YYYY')}
            </p> 

            
        </div>
    
)

export default ExpenseListItem