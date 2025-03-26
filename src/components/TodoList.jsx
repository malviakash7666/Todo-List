import React from 'react'

const TodoList = (props) => {
  return (
   <div className="list-item">
    <h3>{props.list}</h3>
    <span className='icons' onClick={()=>
        props.deleteItem(props.index)
    }>
    ❌
    </span>
   </div>
  )
}

export default TodoList