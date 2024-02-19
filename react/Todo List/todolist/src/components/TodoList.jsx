import React, { useState } from 'react';

const TodoList = (props) => {
    const remove = (index) => {
        props.delete(index);
        
    };

    return (
        <>
            <ul >
                {props.tasks.map((item, i) => (
                    <li  style={{textDecoration:  item.done ? "line-through" : ""}} key={i}>
                        {item.value} 
                    
                        <span style={{ marginLeft: '10px', marginRight: '20px' }}>{item}</span>
                        <input type="checkbox" onChange={
                            ()=>{
                                item.done === (true)
                        } }style={{margin:"20px"}} />
                        <button onClick={() => remove(i)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default  TodoList ;