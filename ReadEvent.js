import React from 'react';
//import CreateNav from './CreateNav';
import Loader from './Loader';

class ReadEvent extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            events : [],
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
            this.setState({ events : data,loading : false});
        }    
        );
    }
    async componentDidMount(){
        await fetch('http://localhost/php-api/view/readall.view.php')
        .then(response => response.json())
        .then(data => { 
            this.setState({ events : data,loading : false});
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
        if (this.state.events !== null)
        {
        return(
            
            <div className="container ms-2 mt-4 ">
                
                <h1 className="text-danger">View User Details</h1>
                <table className="table align-middle mt-4 table-bordered">
                    <thead>
                        <tr className="table-info">
                            <th>Event</th>
                            <th>Description</th>
                            <th>Insert At</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {   
                            this.state.events.map(event => {
                            
                            return(
                            <tr>
                                <td className="text-info">{event.event}</td>
                                <td className="text-info">{event.desc}</td>
                                <td className="text-info">{event.date}</td>
                                <td><i class="fas fa-trash fa-2x text-danger"></i></td>
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

export default ReadEvent;