import React ,{useState} from "react";

function TodoForm({addTodo}){

   const[title,settitle]=useState("");

   const handleSubmit = (e)=>{
    e.preventDefault();
    if(title.trim()==="" ){
   alert("Please enter a task");
   return;
    }

    addtodo(title.trim());

    settitle("");

   };

    return(
        <div>
            <form onSubmit={handleSubmit} className="todo-form">

                <input 
                type="text"
                placeholder="Enter your task"
                value={title}
                onChange={(e)=> 
                    settitle(e.target.value)}
                />
             <button
              type="submit">
                Add Task
             </button>
            </form>
        </div>
    );
}

export default TodoForm;