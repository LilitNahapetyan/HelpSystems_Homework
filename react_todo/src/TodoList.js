import TodoItem from "./TodoItem";
import "./TodoItem.css";
function TodoList(props) {
    return (
        <div>
            {
                props.todos.map((todo) => {
                    return (
                        <TodoItem 
                            key={todo.id} 
                            todo={todo} 
                            onChange={props.onChange}
                            onDelete={props.onDelete}
                        />
                    )
                })
            }
        </div>
    )
}
export default TodoList;