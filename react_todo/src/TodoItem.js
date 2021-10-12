import "./TodoForm.css";
function TodoItem(props) {
    return (
        <div className="todoListItem">
            <label>
                <input type="checkbox" checked={props.todo.isCompleted} onChange={() => {
                    props.onChange({
                        ...props.todo,
                        isCompleted: !props.todo.isCompleted
                    });
                }}/>
                {props.todo.text}
                
            </label>
            <button 
                onClick={() => {
                    props.onDelete(props.todo);
                }}>X</button>
        </div>
    )
}

export default TodoItem;