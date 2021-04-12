import React from 'react';
import axios from 'axios';

class CreateService extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            title : '',
            desciption : '',
            img : '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleImage = this.handleImage.bind(this);
    }
    handleTitle(event)
    {
        this.setState({title : event.target.value})
    }
    handleDescription(event)
    {
        this.setState({desciption : event.target.value})
    }
    handleImage(event)
    {
        this.setState({img : event.target.value})
    }
    handleSubmit(event)
    {
        this.setState({message : 'Loading...'});
        event.preventDefault();
        const blogData = {
            tiile : this.state.title,
            description : this.state.description,
            img : this.state.img
        };
        axios.post(`http://localhost/php-api/controller/php_api/category/add_category.controller.php`,blogData)
        .then(response => {
            this.setState({message : 'New service added',category : ''});
            setTimeout(()=>{
                this.setState({message : ''});
            },3000);
        })
        .catch(error => {
            this.setState({message : 'Unable to add service'});
        });
    }
    render()
    {
        const { title , description , img } = this.state;
        return (
            <div className="container">
                <h1 className="mt-5 text-danger text-center">Add Services</h1>
                
                <form onSubmit={this.handleSubmit} className="mt-4">
                    <div className="form-outline mb-4">
                        <label className="form-label text-danger" for="name">Service title</label>
                        <input 
                            type="text" 
                            id="title" 
                            name="title" 
                            className="form-control" 
                            onChange={this.handleTitle} 
                            value={title} />
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label text-danger" for="name">Service Description</label>
                        <input 
                            type="text" 
                            id="description" 
                            name="description" 
                            className="form-control" 
                            onChange={this.handledescription} 
                            value={description} />
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label text-danger" for="name">Service Image</label>
                        <input 
                            type="text" 
                            id="img" 
                            name="img" 
                            className="form-control" 
                            onChange={this.handleImage} 
                            value={img} />
                    </div>
                    <button type="submit" className="btn btn-danger btn-block mb-4">Insert</button>
                </form>
                <p className="text-danger">{this.state.message}</p>
            </div>
        )
    }
}

export default CreateService;