import React from 'react';
import axios from 'axios';

class CreateBlog extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            title : '',
            desc : '',
            message : ''
        };
        this.handleDesc = this.handleDesc.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
    }
    handleTitle(event)
    {
        this.setState({title : event.target.value})
    }
    handleDesc(event)
    {
        this.setState({desc : event.target.value})
    }
    handleSubmit(event)
    {
        this.setState({message : 'Loading...'});
        event.preventDefault();
        const blogData = {
            title : this.state.title,
            description : this.state.desc
        };
        axios.post(`http://localhost/php-api/controller/php_api/blog/create_blog.controller.php`,blogData)
        .then(response => {
            this.setState({message : 'blog created',title : '', desc :''});
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
        const { title, desc } = this.state;
        return (
            <div className="container">
                <h1 className="mt-5 text-danger text-center">Add Blog</h1>
                
                <form onSubmit={this.handleSubmit} className="mt-4">
                    <div className="form-outline mb-4">
                        <label className="form-label text-danger" for="name">title</label>
                        <input 
                            type="text" 
                            id="event" 
                            name="event" 
                            className="form-control" 
                            onChange={this.handleTitle} 
                            value={title} />
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label text-danger" for="email">Description</label>
                        <textarea
                            type="text" 
                            id="desc"
                            row="3"
                            col="5" 
                            className="form-control" 
                            onChange={this.handleDesc} 
                            value={desc}
                        >
                            
                        </textarea>
                    </div>
                    <button type="submit" className="btn btn-danger btn-block mb-4">Insert</button>
                </form>
                <p className="text-danger">{this.state.message}</p>
            </div>
        )
    }
}

export default CreateBlog;