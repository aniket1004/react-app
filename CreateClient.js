import React from 'react';
import axios from 'axios';

class CreateClient extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            name : '',
            img : '',
            message : '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleImage = this.handleImage.bind(this);
    }
    handleName(event)
    {
        this.setState({name : event.target.value})
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
            name : this.state.name,
            img : this.state.img
        };
        axios.post(`http://localhost/php-api/controller/php_api/client/create_client.controller.php`,blogData)
        .then(response => {
            this.setState({message : 'New client added',name : '',img : ''});
            setTimeout(()=>{
                this.setState({message : ''});
            },3000);
        })
        .catch(error => {
            this.setState({message : 'Unable to add client'});
        });
    }
    render()
    {
        const { name , img } = this.state;
        return (
            <div className="container">
                <h1 className="mt-5 text-danger text-center">Add Services</h1>
                
                <form onSubmit={this.handleSubmit} className="mt-4">
                    <div className="form-outline mb-4">
                        <label className="form-label text-danger" for="title">Client Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            className="form-control" 
                            onChange={this.handleName} 
                            value={name} />
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label text-danger" for="img">Client Image(Insert Link)</label>
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

export default CreateClient;