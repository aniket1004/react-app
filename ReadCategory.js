import React from 'react';
//import CreateNav from './CreateNav';
import Loader from './Loader';

class ReadCategory extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            category : [],
            message : "",
            loading : true
        };
        this.loadData = this.loadData.bind(this);
    }
    async loadData()
    {
        await fetch('http://localhost/php-api/controller/php_api/category/read_category.controller.php')
        .then(response => response.json())
        .then(data => { 
            this.setState({ category : data,loading : false});
        }    
        );
    }
    async componentDidMount(){
        await fetch('http://localhost/php-api/controller/php_api/category/read_category.controller.php')
        .then(response => response.json())
        .then(data => { 
            this.setState({ category : data,loading : false});
        }    
        );
    }
    async deleteEvent(id,e)
    {
        this.setState({message : 'Loading...'});
        const url = `http://localhost/php-api/controller/php_api/category/delete_category.controller.php?category=${id}`;
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
        if (this.state.category !== null)
        {
        return(
            
            <div className="container ms-2 mt-4 ">
                
                <h1 className="text-danger">View Categories</h1>
                <table className="table align-middle mt-4 table-bordered">
                    <thead>
                        <tr className="table-info">
                            <th>Categories</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {   
                            this.state.category.map(event => {
                            
                            return(
                            <tr>
                                <td className="text-info">{event.cat}</td>
                                <td><i class="fas fa-trash fa-2x text-danger" onClick={(e)=> this.deleteEvent(event.cat,e)}></i></td>
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

export default ReadCategory;