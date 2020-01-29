import React, {Component} from 'react';
import './Register.scss';
import firebase from '../../../config/firebase';


class Register extends Component{
    state = {
        email: '',
        password: ''
    }

    handleChangeText = (e) => {
        // console.log(e.target.id);
        this.setState({
            [e.target.id]: e.target.value,
            [e.target.id]: e.target.value,
        })
    }

    handleRegisterSubmit = () => {
        
        const {email, password} = this.state;
        console.log('data before send: ',email,password);
        


        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res =>{
            console.log('success: ', res);
            
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
            
        });
    }

    render(){
        return(
            <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title">Register Page</p>
                    <input placeholder="Email" id="email" className="input" type="text" onChange={this.handleChangeText} />
                    <input placeholder="Password" id="password" className="input" type="password" onChange={this.handleChangeText}  />
                    <button className="btn" onClick={this.handleRegisterSubmit}>Register</button>
                </div>
            
                {/*<button>Got to Dashboard</button>*/}
            </div>
        )
    }
}

export default Register;