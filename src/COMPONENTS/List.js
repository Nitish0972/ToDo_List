import React from "react";
export default function List({todos, handleDelete, handleEdit}){
    return(
        <ul className='allTodos'>
          {
            todos.map((t) => (
              <li className='singleTodo'>
                <span className='todoText' key={t.id}>{t.todo}</span>
                <button onClick={() => handleEdit(t.id)}>Edit</button>
                <button onClick={() => handleDelete(t.id)}>Delete</button>
              </li>
            ))
          }
        </ul>
    )
}