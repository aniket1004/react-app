import React from 'react';
//import CreateNav from './CreateNav';
import Loader from './Loader';

class ReadBlog extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            blogs : [],
            message : '',
            loading : true
        };
        this.loadData = this.loadData.bind(this);
    }
    async loadData()
    {
        await fetch('http://localhost/php-api/controller/php_api/blog/read_blog.controller.php')
        .then(response => response.json())
        .then(data => { 
            this.setState({ blogs : data,loading : false});
        }    
        );
    }
    async componentDidMount(){
        await fetch('http://localhost/php-api/controller/php_api/blog/read_blog.controller.php')
        .then(response => response.json())
        .then(data => { 
            this.setState({ blogs : data,loading : false});
            console.log(data);
        }    
        );
    }
    
    async deleteBlog(id,e)
    {
        this.setState({message : 'Loading...'});
        const url = `http://localhost/php-api/controller/php_api/blog/delete_blog.controller.php?id=${id}`;
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
        if (this.state.blogs !== null)
        {
        return(
            
            <div className="container ms-2 mt-4 ">
                
                <h1 className="text-danger">View Blog Details</h1>
                <table className="table align-middle mt-4 table-bordered">
                    <thead>
                        <tr className="table-info">
                            <th>Id</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Insert At</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {   
                            this.state.blogs.map(blog => {
                            
                            return(
                            <tr>
                                <td className="text-info">{blog.id}</td>
                                <td className="text-info">{blog.title}</td>
                                <td className="text-info">{blog.description}</td>
                                <td className="text-info">{blog.date}</td>
                                <td><i class="fas fa-trash fa-2x text-danger" onClick={(e)=> this.deleteBlog(blog.id,e)}></i></td>
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

export default ReadBlog;