import React from 'react';
//import CreateNav from './CreateNav';
import Loader from './Loader';

class ReadServices extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            services : [],
            message : '',
            loading : true
        };
        this.loadData = this.loadData.bind(this);
    }
    async loadData()
    {
        await fetch('http://localhost/php-api/controller/php_api/services/read_service.controller.php')
        .then(response => response.json())
        .then(data => { 
            this.setState({ services : data,loading : false});
        }    
        );
    }
    async componentDidMount(){
        await fetch('http://localhost/php-api/controller/php_api/services/read_service.controller.php')
        .then(response => response.json())
        .then(data => { 
            this.setState({ services : data,loading : false});
        }    
        );
    }
    async deleteService(id,e)
    {
        this.setState({message : 'Loading...'});
        const url = `http://localhost/php-api/controller/php_api/services/delete_services.controller.php?id=${id}`;
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
        if (this.state.services !== null)
        {
        return(
            
            <div className="container ms-2 mt-4 ">
                
                <h1 className="text-danger">View Services</h1>
                <table className="table align-middle mt-4 table-bordered">
                    <thead>
                        <tr className="table-info">
                            <th>Title</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {   
                            this.state.services.map(event => {
                            
                            return(
                            <tr>
                                <td className="text-info">{event.title}</td>
                                <td className="text-info">{event.description}</td>
                                <td className="text-info">{event.img}</td>
                                <td><i class="fas fa-trash fa-2x text-danger" onClick={(e)=> this.deleteService(event.sr_no,e)}></i></td>
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

export default ReadServices;