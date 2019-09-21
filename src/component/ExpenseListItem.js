//Export a stateless functional component
//render description, amount, createdAt
import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


//deklarasi state yang dibutuhkan
const ExpenseListItem = ({ id, description, amount, createdAt}) => (
    
        <div>
            {/* memberikan 'description' link, yang jika di klik akan menuju hal. edit, dan yang terpenting membawa serta id */}
            <Link to={`/edit/${id}`}> 
                 <h1>{description}</h1>
            </Link>

            {/* menampilkan hasil state amount dan state createdAt */}
            <p>{amount} - {createdAt}</p> 

            
        </div>
    
)

export default ExpenseListItem