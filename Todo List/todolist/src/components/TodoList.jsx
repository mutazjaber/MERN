import React, { useState } from 'react';

const TodoList = (props) => {
    const remove = (index) => {
        props.delete(index);
        
    };

    return (
        <>
            <ul >
                {props.tasks.map((item, i) => (
                    <li key={i}>
                        
                        <span style={{ marginLeft: '10px', marginRight: '20px' }}>{item}</span>
                        <input type="checkbox" style={{margin:"20px"}} />
                        <button onClick={() => remove(i)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default  TodoList ;