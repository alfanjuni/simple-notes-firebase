import React, {Component} from 'react';
import './Register.scss';
import firebase from '../../../config/firebase';
import Button from '../../../components/atoms/Button';
import { connect } from 'react-redux';
import { registerUserAPI } from '../../../config/redux/action';


class Register extends Component{
    state = {
        email: '',
        password: '',
    }

    handleChangeText = (e) => {
        // console.log(e.target.id);
        this.setState({
            [e.target.id]: e.target.value,
            [e.target.id]: e.target.value,
        })
    }

    handleRegisterSubmit = async () => {
        const {email, password} = this.state;
        const res = await this.props.registerAPI({email, password}).catch(err => err);
        if(res){
            this.setState({
                email:'',
                password: ''
            })
        }
    }

    render(){
        return(
            <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title">Register Page</p>
                    <input placeholder="Email" id="email" className="input" type="text" onChange={this.handleChangeText} value={this.state.email}/>
                    <input placeholder="Password" id="password" className="input" type="password" onChange={this.handleChangeText}   value={this.state.password} />
                    <Button onClick={this.handleRegisterSubmit} title="Register" loading={this.props.isLoading}/>

                </div>
            
                {/*<button>Got to Dashboard</button>*/}
            </div>
        )
    }
}

const reduxState = (state) => ({
    isLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
    registerAPI: (data) => dispatch(registerUserAPI(data))
})

export default connect(reduxState, reduxDispatch)(Register) ;