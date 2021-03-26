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
    }
    render()
    {
        return(
            <div className="container">
                <h1 className="mt-5 text-danger text-center">Add Event</h1>
                
                <form onSubmit="" className="mt-4">
                    <div className="form-outline mb-4">
                        <label className="form-label text-danger" for="name">Event</label>
                        <input 
                            type="text" 
                            id="event" 
                            name="event" 
                            className="form-control" 
                            onChange="" 
                            value="" />
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label text-danger" for="email">Description</label>
                        <input 
                            type="text" 
                            id="desc" 
                            className="form-control" 
                            onChange="" 
                            value="" />
                    </div>
                    <button type="submit" className="btn btn-danger btn-block mb-4">Insert</button>
                </form>
                <p className="text-danger"></p>
            </div>
        )
    }
}

export default CreateEvent;