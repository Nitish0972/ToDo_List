import React from "react";

export default function Form({handleSubmit, todo, editId, setTodo}){
    return(
        <div>
        <form className='todoForm' onSubmit={handleSubmit}>
          <input type='text' value={todo} onChange={(e) =>setTodo(e.target.value)}></input>
          <button type='submit'> {editId?"Edit":"Go"} </button>
        </form>
        </div>
    )
}