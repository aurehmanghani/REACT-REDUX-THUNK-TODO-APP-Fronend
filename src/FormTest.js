import React from 'react';

export default class FormTest extends React.Component{
    constructor(props){
        super(props);
        this.state = { username: '' }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({ username: event.target.value });
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state.username);
    }
    
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.username} onChange={this.handleChange}/>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}