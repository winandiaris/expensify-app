//High Order Component (HOS) = component (HOC) yang merender komponen lain
import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is : {props.info}</p>
    </div>
)

//HOC - bisa digunakan ulang
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            
            {props.isAdmin && <p>ini adalah data rahasia milik admin</p>}
            {/*WrappedComponent = memunculkan komponent yang jadi argumen
            withAdminWarning dibawah / <Info/>*/}
            {/*{...props} = berfungsi menampilkan sub komponent/ sub props/ child */}
            <WrappedComponent {...props}/> 
        </div>
    )
}

const requireAuth = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth ? (
                <WrappedComponent {...props}/>
            ) : (
                <p>Silahkan login terlebih dahulu</p>
            )
            
            }
        </div>
        
    )
}

//component baru yang akan di render
const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuth(Info)
// ReactDOM.render(<AdminInfo isAdmin={true}  info="pernyataan"/>, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuth={true}  info="pernyataan"/>, document.getElementById('app'))