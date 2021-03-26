import React from 'react';

class CreateEvent extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            event : '',
            desc : ''
        }
        this.handleDesc = this.handleDesc.bind(this);
        this.handleEvent = this.handleEvent.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleEvent(event)
    {
        this.setState({ event : event.target.value});
    }
    handleDesc(event)
    {
        this.setState({ desc : event.target.value })
    }
    handleSubmit(event)
    {
        alert(`${this.state.event} and ${this.state.desc}`);
        event.preventDefault();
    }
    render()
    {
        const {event , desc} = this.state;
        return(
            <div className="container">
                <h1 className="mt-5 text-danger text-center">Add Event</h1>
                
                <form onSubmit={this.handleSubmit} className="mt-4">
                    <div className="form-outline mb-4">
                        <label className="form-label text-danger" for="name">Event</label>
                        <input 
                            type="text" 
                            id="event" 
                            name="event" 
                            className="form-control" 
                            onChange={this.handleEvent} 
                            value={event} />
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
                        >
                            {desc}
                        </textarea>
                    </div>
                    <button type="submit" className="btn btn-danger btn-block mb-4">Insert</button>
                </form>
                <p className="text-danger"></p>
            </div>
        )
    }
}

export default CreateEvent;