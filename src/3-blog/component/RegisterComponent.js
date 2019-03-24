import React from 'react'
// import {Redirect } from 'react-router';

export default class Register extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          password: ''
        };
        
      }
      
      handleNameChange= (e) =>{
        this.setState({
            name : e.target.value
        })
        
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
        let name=this.state.name;
        let email=this.state.email;
        let password=this.state.password;
        let data = {'name':name, 'email':email,'password':password};
        console.log(data);
        localStorage.setItem('myData',JSON.stringify(data)); 
        console.log("Registration Success!!!");
        this.setState({
            name :'',
            email:'',
            password:''
        }) ;
       
       
        // Redirect.push('/login') ;
       
      }

    render(){
        return(
            <React.Fragment>
            <h1>Register Here!</h1>
            <div>
            <form onSubmit={this.handleOnSubmit}>
            <div>
            <label style={{ margin:'10px'}}>Name</label>
            <input name="name" placeholder="Name" value={this.state.name} onChange={this.handleNameChange} ></input>
            </div>
            <div>
            <label style={{ margin:'10px'}}>Email</label>
                <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} ></input>
            </div>
            <div>
            <label style={{ margin:'10px'}}>Password</label>
                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}></input>
            </div>
            
            <div>
            <button type="submit" style={{ margin:'10px'}}>Register</button>
            </div>
            </form>
            </div>
            
        </React.Fragment>
        )
    }
}