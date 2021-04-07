import React from 'react';
import axios from 'axios';

class CreateCategory extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            category : '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCategory = this.handleCategory.bind(this);
    }
    handleCategory(event)
    {
        this.setState({category : event.target.value})
    }
    handleSubmit(event)
    {
        this.setState({message : 'Loading...'});
        event.preventDefault();
        const blogData = {
            category : this.state.category
        };
        axios.post(`http://localhost/php-api/controller/php_api/category/add_category.controller.php`,blogData)
        .then(response => {
            this.setState({message : 'New category added',category : ''});
            setTimeout(()=>{
                this.setState({message : ''});
            },3000);
        })
        .catch(error => {
            this.setState({message : 'Unable to create user'});
        });
    }
    render()
    {
        const { category } = this.state;
        return (
            <div className="container">
                <h1 className="mt-5 text-danger text-center">Add Category</h1>
                
                <form onSubmit={this.handleSubmit} className="mt-4">
                    <div className="form-outline mb-4">
                        <label className="form-label text-danger" for="name">New Category</label>
                        <input 
                            type="text" 
                            id="category" 
                            name="category" 
                            className="form-control" 
                            onChange={this.handleCategory} 
                            value={category} />
                    </div>
                    <button type="submit" className="btn btn-danger btn-block mb-4">Insert</button>
                </form>
                <p className="text-danger">{this.state.message}</p>
            </div>
        )
    }
}

export default CreateCategory;