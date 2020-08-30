import React, {useCallback} from 'react'
import app from '../../firebase';
import { withRouter } from 'react-router-dom';

const SignUp = ({history}) => {
    const handleSignUp = useCallback(
        async event => {
            event.preventDefault();
            const {f_name, l_name, email, password} = event.target.elements;
            try{
                await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value).then(
                    (res) => {
                        console.log(res.user)
                    }
                );
                history.push("/home");
            }catch(err){
                alert(err)
            }
        },
        [history],
    )
    return (
        <div className="container ">
            <h1 className="white-text">Register</h1>
            <form  onSubmit={handleSignUp}>
              <div className="input-field col s12 l6">
                <input type="text" id="first_name" name="first_name" className="validate" />
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field col s12 l6">
                <input type="text" id="last_name" name="last_name" className="validate" />
                <label htmlFor="last_name">Last Name</label>
              </div>
              <div className="input-field col s12">
                <input type="email" id="email" name="email" className="validate" />
                <label htmlFor="email" data-error="wrong" data-success="right">Email</label>
              </div>
              <div className="input-field col s12">
                <input type="password" id="password" name="password" className="validate" />
                <label htmlFor="password">Password</label>
              </div>
              <button className="waves-effect waves-light btn" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default withRouter(SignUp);