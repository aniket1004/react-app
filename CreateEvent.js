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
            <h1>Create Events</h1>
        )
    }
}

export default CreateEvent;