import React from 'react';
//import CreateNav from './CreateNav';
import Loader from './Loader';

class ReadClients extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            client : [],
            message : "",
            loading : true
        };
        this.loadData = this.loadData.bind(this);
    }
    async loadData()
    {
        await fetch('http://localhost/php-api/controller/php_api/client/read_client.controller.php')
        .then(response => response.json())
        .then(data => { 
            this.setState({ client : data,loading : false});
        }    
        );
    }
    async componentDidMount(){
        await fetch('http://localhost/php-api/controller/php_api/client/read_client.controller.php')
        .then(response => response.json())
        .then(data => { 
            this.setState({ client : data,loading : false});
        }    
        );
    }
    async deleteEvent(id,e)
    {
        this.setState({message : 'Loading...'});
        const url = `http://localhost/php-api/controller/php_api/client/delete_client.controller.php?id=${id}`;
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
        if (this.state.client !== null)
        {
        return(
            
            <div className="container ms-2 mt-4 ">
                
                <h1 className="text-danger">View Clients</h1>
                <table className="table align-middle mt-4 table-bordered">
                    <thead>
                        <tr className="table-info">
                            <th>Name</th>
                            <th>Image</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {   
                            this.state.client.map(event => {
                            
                            return(
                            <tr>
                                <td className="text-info">{event.name}</td>
                                <td className="text-info">{event.img}</td>
                                <td><i class="fas fa-trash fa-2x text-danger" onClick={(e)=> this.deleteEvent(event.id,e)}></i></td>
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

export default ReadClients;