import "./TodoFooter.css";
function TodoFooter(props) {

    const completedSize = props.todos.filter((todo) => todo.isCompleted).length;
    return (
        <div className="todoAppFooter">
            <span>{completedSize}/{props.todos.length} Completed</span>
            <button 
                className="todoClearCompleted"
                onClick={props.onClearCompleted}
            >Clear Completed</button>
        </div>
    )
}

export default TodoFooter;