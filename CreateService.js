import React from 'react';
import axios from 'axios';

class CreateService extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            title : '',
            description : '',
            img : '',
            message : '',
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
        this.setState({description : event.target.value})
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
            title : this.state.title,
            description : this.state.description,
            img : this.state.img
        };
        axios.post(`http://localhost/php-api/controller/php_api/services/create_service.controller.php`,blogData)
        .then(response => {
            this.setState({message : 'New service added',title : '',description : '',img : ''});
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
        // const { title , description , img } = this.state;
        return (
            <div className="container">
                <h1 className="mt-5 text-danger text-center">Add Services</h1>
                
                <form onSubmit={this.handleSubmit} className="mt-4">
                    <div className="form-outline mb-4">
                        <label className="form-label text-danger" for="title">Service title</label>
                        <input 
                            type="text" 
                            id="title" 
                            name="title" 
                            className="form-control" 
                            onChange={this.handleTitle} 
                            value={this.state.title} />
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label text-danger" for="description">Service Description</label>
                        <input 
                            type="text" 
                            id="description" 
                            name="description" 
                            className="form-control" 
                            onChange={this.handleDescription} 
                            value={this.state.description} />
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label text-danger" for="img">Service Image</label>
                        <input 
                            type="text" 
                            id="img" 
                            name="img" 
                            className="form-control" 
                            onChange={this.handleImage} 
                            value={this.state.img} />
                    </div>
                    <button type="submit" className="btn btn-danger btn-block mb-4">Insert</button>
                </form>
                <p className="text-danger">{this.state.message}</p>
            </div>
        )
    }
}

export default CreateService;