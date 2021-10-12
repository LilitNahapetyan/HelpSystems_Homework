import "./TodoForm.css";
import { useState } from "react";
function TodoForm({onAdd}){

    const [text, setText] = useState("");
    return(
        <form className = "form" onSubmit={(e) => {
            e.preventDefault();
            onAdd(text);
            setText("");
        }}>
                <input className="todoInput" type="text" value={text} onChange ={(e)=>{
                    setText(e.target.value);
                }} />
                <button className="todoBtn">Add</button>
        </form>
    )
}

export default TodoForm;



