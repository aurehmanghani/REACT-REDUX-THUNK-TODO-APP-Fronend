import React from 'react';
export default class Todos extends React.Component {
    renderObject(){
        let todos = this.props.todoList;
        return todos && todos.map((item, index) => {
            const isCompleted = (item.completed)? "text-muted list-group-item mr-1 line" : 'text-muted list-group-item mr-1';
            return (
                <li className={isCompleted} key={index}>{item.value} 
                &nbsp;<button className="float-right btn btn-primary btn-sm mr-1" data-id={item.id} onClick={this.props.onClickRemoveTodos}>Remove</button>
                <button className=" float-right btn btn-primary btn-sm mr-3" data-id={item.id} data-text={item.value} onClick={this.props.onClickCompleteTodos} disabled={item.completed}>Completed</button>
                </li>
            )
        })
    } 
    render(){        
        return(
        <ul className="list-group m-1">
            {this.renderObject()}
        </ul>
        )
    }
}