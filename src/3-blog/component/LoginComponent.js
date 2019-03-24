import React from 'react'
// import {Redirect } from 'react-router';
export default class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: ''
        };
        
      }
      handleEmailChange = (e) =>{
        this.setState({
            email : e.target.value
        })
       
      }
      handlePasswordChange = (e) =>{
        this.setState({
            password : e.target.value
        })
        
      }
      handleOnSubmit = (e) =>{
        e.preventDefault();
        let email=this.state.email;
        let password=this.state.password;
        let data = JSON.parse(localStorage.getItem('myData'));
        console.log(email);
        console.log(password);
        console.log(localStorage.getItem('myData'));
        console.log(data['name']);
        if(data['email']===email && data['password']===password)
        {

            console.log("Login Success");
        }
        else{
            console.log("Login Fail");
        }
        
        this.setState({
            email:'',
            password:''
        }) ;       
        
       
       
      }

    render(){
        return(
            <React.Fragment>
                <h1>Login Here!</h1>
                <div>
                    <form onSubmit={this.handleOnSubmit}>
                    <div>                
                <label style={{ margin:'10px'}}>Email</label>
                    <input type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange}  ></input>
                </div>
                <div>
                <label style={{ margin:'10px'}}>Password</label>
                    <input type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}></input>
                </div>
                <div>
                <button type="submit" style={{ margin:'10px'}}>Login</button>
                </div>
                    </form>
                </div>
                
            </React.Fragment>
        );
    }
}