import React, {Component} from 'react';
import { connect } from 'react-redux'; //dikomponen import connect untu terhubung dengan initialSate global
import { actionUserName } from '../../../config/redux/action';
import Button from '../../../components/atoms/Button';
import { loginUserAPI } from '../../../config/redux/action';

class Login extends Component{

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

    handleLoginSubmit = async () => {
        const {email, password} = this.state;
        const {history} = this.props;  //pindah halaman react router
        const res = await this.props.loginAPI({email, password}).catch(err => err);
        if(res) {
            console.log('Login success', res);
            this.setState({
                email:'',
                password: ''
            })
            history.push('/')
        }else {
            console.log('Login failed');
        }
    }

    render(){
        return(
            <div className="auth-container">
            <div className="auth-card">
                <p className="auth-title">Login Page</p>
                <input placeholder="Email" id="email" className="input" type="text" onChange={this.handleChangeText} value={this.state.email}/>
                <input placeholder="Password" id="password" className="input" type="password" onChange={this.handleChangeText}   value={this.state.password} />
                <Button onClick={this.handleLoginSubmit} title="Login" loading={this.props.isLoading}/>

            </div>
        </div>
        )
    }
}



const reduxState = (state) => ({
    isLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
    loginAPI: (data) => dispatch(loginUserAPI(data))
})

export default connect(reduxState, reduxDispatch)(Login); //cara penulisan export redux state adalah nama state bebas dan dispatch