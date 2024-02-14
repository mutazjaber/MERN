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
                        <input type="checkbox" />
                        <span style={{ marginLeft: '10px', marginRight: '20px' }}>{item}</span>
                        <button onClick={() => remove(i)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default  TodoList ;