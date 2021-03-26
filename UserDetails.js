import React from 'react';
import CreateNav from './CreateNav';
import Loader from './Loader';

class UserDetails extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            users : [],
            message : '',
            loading : true
        };
        this.loadData = this.loadData.bind(this);
    }
    async loadData()
    {
        await fetch('http://localhost/php-api/view/readall.view.php')
        .then(response => response.json())
        .then(data => { 
            this.setState({ users : data,loading : false});
        }    
        );
    }
    async componentDidMount(){
        await fetch('http://localhost/php-api/view/readall.view.php')
        .then(response => response.json())
        .then(data => { 
            this.setState({ users : data,loading : false});
        }    
        );
    }
    async deleteUser(uid,mail,e)
    {
        const url = `http://localhost/php-api/controller/php_api/user/delete_user.controller.php?id=${uid}&email=${mail}`;
        await fetch(url)
        .then(response => response.json())
        .then(data => this.setState({message : data.Message}));
        this.loadData();
    }
    render()
    {
        if (this.state.loading)
        {
            return (
                <Loader />
            )
        }
        else
        {
        if (this.state.users !== null)
        {
        return(
            
            <div className="container ms-2 mt-4 ">
                
                <h1 className="text-danger">View User Details</h1>
                <table className="table align-middle mt-4 table-bordered">
                    <thead>
                        <tr className="table-info">
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {   
                            this.state.users.map(user => {
                            
                            return(
                            <tr>
                                <td className="text-info">{user.id}</td>
                                <td className="text-info">{user.name}</td>
                                <td className="text-info">{user.email}</td>
                                <td><i class="fas fa-trash fa-2x text-danger" onClick={(e)=> this.deleteUser(user.id,user.email,e)}></i></td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            
        )
        }
        else
        {
            return (<h1 style={{
                textAlign : 'center',
                marginTop : '15%'
             }} className="text-danger">Data not found</h1>)
        }
    }
    }
}

export default UserDetails;