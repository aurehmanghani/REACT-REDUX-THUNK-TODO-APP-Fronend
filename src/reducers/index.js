const reducer = (state=[],action) =>{
    switch (action.type) {
        case 'LOAD_TODOS': { 
            return{ todos: [...action.todos] } 
        }
        case 'ADD_TODOS': {
            return {
                todos: [...state.todos, action.todo]
            }
        }
        case 'REMOVE_TODO': {
            const res = state.todos.filter((todo)=>todo.id !==`${action.todoID}` );
            console.log('res: ', res)
            return {
                todos: res
            }
        }
        case 'COMPLETE_TODO': {
            return{
                todos: [...action.todos.todos] 
            }
        }
        default:
          return state
      }
}
export default reducer;