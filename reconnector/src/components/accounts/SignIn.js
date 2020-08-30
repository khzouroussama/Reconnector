import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import firebase from '../../firebase'


// function useValues(){
//     const [contacts, setContacts] = useState([])

//     useEffect( () => {
//         firebase
//         .firestore()
//         .collection('contacts')
//         .onSnapshot(snapshot => {
//             console.log(snapshot.docs)
//             debugger
//         })
//     },[])

//     return contacts
// }

// export const SignIn = () => {
    
//     const initialValues = {
//         email: '',
//         password: '',
//     }
//     console.log(firebase)
//     var [values, setValues] = useState(initialValues)
    
//     const handleChange = (e) => {
//         var [name, value] = e.target
//         setValues({
//             ...values,
//             [name]: value
//         })
//     }
//     const handleSubmit = (e) => {
//         console.log(e);
//     }

//     const contact = useValues();
//     return (

//         <div className="container">
//             <h1>This is the sign in page</h1>
//             <form onSubmit={handleSubmit}>
//                 <div className="input-field col s12">
//                     <input type="email" name="email" id="email" className="validate" value={values.email} onChange={handleChange} />
//                     <label htmlFor="email" data-error="wrong" data-success="right">Email</label>
//                 </div>
//                 <div className="input-field col s12">
//                     <input type="password" name="password" id="password" className="validate" value={values.password} onChange={handleChange} />
//                     <label htmlFor="password" >Password</label>
//                 </div>
//                 <button type="submit" className="waves-effect waves-light btn">Submit</button>
//                 <Link to="/login" type="submit" className="waves-effect waves-light btn">Login</Link >
//             </form>
//         </div>
//     )
// }


import {signIn, isLoggedIn } from './auth'

export const SignIn = () => {
    const text = isLoggedIn ? "Login with Google" : "Logout";
    return (
        <div>
            <button className="btn waves-effect waves-light" onClick={signIn} type="submit" name="action">{text}
                <i className="material-icons right">send</i>
            </button>
        </div>
    )
}

