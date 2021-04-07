import React from 'react';
import axios from 'axios';

class CreateUser extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = {name : '', email : '',message : ''};
        this.handleEmail = this.handleEmail.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleName(event)
    {
        this.setState({ name : event.target.value});
    }
    handleEmail(event)
    {
        this.setState({ email : event.target.value});
    }
    handleSubmit(event)
    {
        this.setState({message : 'Loading...'});
        event.preventDefault();
        const userData = {
            name : this.state.name,
            email : this.state.email
        };
        axios.post('http://localhost/php-api/controller/php_api/user/create_user.controller.php',userData)
        .then(response => {
            this.setState({message : 'User created..',name : '', email : ''});
            setTimeout(()=>{
                this.setState({message : ''});
            },3000)
        })
        .catch(error => {
            this.setState({message : 'Unable to create user'});
        })
    }
    render()
    {
        const { name , email} = this.state;
        return (
            <div className="container">
                <h1 className="mt-5 text-danger text-center">Add User</h1>
                
                <form onSubmit={this.handleSubmit} className="mt-4">
                    <div className="form-outline mb-4">
                        <label className="form-label text-danger" for="name">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            className="form-control" 
                            onChange={this.handleName} 
                            value={name} />
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label text-danger" for="email">Email Id</label>
                        <input 
                            type="email" 
                            id="email" 
                            className="form-control" 
                            onChange={this.handleEmail} 
                            value={email}/>
                    </div>
                    <button type="submit" className="btn btn-danger btn-block mb-4">Insert</button>
                </form>
                <p className="text-danger">{this.state.message}</p>
            </div>
        )
    }
}
export default CreateUser;